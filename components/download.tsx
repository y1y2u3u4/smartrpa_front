import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useExcelData } from '../contexts/AppContext';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Workbook } from 'exceljs';

function DownloadButton() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { excelData } = useExcelData();

    if (!excelData || excelData.length === 0) {
        return null;
    }

    const data = excelData.map((item: string) => JSON.parse(item)).flat();

    function downloadFile(selectedData: any[]) {
        const allHeaders = new Set<string>();

        function collectHeaders(data: any, prefix = '') {
            if (data && typeof data === 'object') {
                Object.keys(data).forEach(key => {
                    const fullKey = prefix ? `${prefix}_${key}` : key;
                    if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
                        collectHeaders(data[key], fullKey);
                    } else {
                        allHeaders.add(fullKey);
                    }
                });
            }
        }

        selectedData.forEach(data => {
            collectHeaders(data);
        });

        const allHeadersArray = Array.from(allHeaders);

        const workbook = new Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');

        worksheet.addRow(allHeadersArray);

        selectedData.forEach(data => {
            const rowData: { [key: string]: any } = {};

            function populateRowData(data: any, prefix = '') {
                if (data && typeof data === 'object') {
                    Object.keys(data).forEach(key => {
                        const fullKey = prefix ? `${prefix}_${key}` : key;
                        if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
                            populateRowData(data[key], fullKey);
                        } else {
                            rowData[fullKey] = data[key];
                        }
                    });
                }
            }

            populateRowData(data);

            const row = allHeadersArray.map(header => rowData[header] || '');
            worksheet.addRow(row);
        });

        workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'file.xlsx');
        }).catch(error => {
            console.error('创建 Excel 文件时出错：', error);
        });
    }



    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        downloadFile(data);
    };
    // useEffect(() => {
    //     console.log('excelData', excelData);
    // }, [excelData, shuruData, shuruData_new]); // 依赖项数组中包含 excelData


    return (
        <div>
            <button className="cursor-pointer py-2 px-[13px] bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"
                onClick={handleClick}>
                <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/download04.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="relative text-sm leading-[20px] font-semibold font-text-sm-semibold text-colors-background-bg-primary text-left inline-block min-w-[107px]">
                        Download excel
                    </div>
                </div>
                <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                    alt=""
                    src="/placeholder3.svg"
                />
            </button>
        </div>
    );
}

export default DownloadButton;


