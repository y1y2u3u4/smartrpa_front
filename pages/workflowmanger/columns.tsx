"use client"

import type {
    ColumnDef
} from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { set } from 'idb-keyval';
// import { get } from 'idb-keyval';
// import { saveAs } from 'file-saver';
// import * as XLSX from 'xlsx';
import { table } from "console";
import { useExcelData } from '@/contexts/AppContext';


const createColumnsFromData = (columnNames: any[]) => {
    if (!columnNames || columnNames.length === 0) {
        return [];
    }
    const columns = [
        {
            id: "select",
            header: ({ table }: { table: any }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }: { row: any }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false,
        },
        ...columnNames.map((columnName: any) => ({
            accessorKey: columnName,
            header: columnName,
            cell: ({ row }: { row: any }) => {
                const cellValue = row.getValue(columnName) as string;
                const shortCellValue = typeof cellValue === "string" && cellValue.length > 20 ? cellValue.substring(0, 20) + '...' : cellValue;
                const [showFullCellValue, setShowFullCellValue] = useState(false);

                const handleClick = () => {
                    setShowFullCellValue(!showFullCellValue);
                };

                return (
                    <div className="text-center font-medium" onClick={handleClick} style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {showFullCellValue ? cellValue : shortCellValue}
                    </div>
                );
            },
        })),
        {
            id: "actions",
            cell: ({ row, table }: { row: any, table: any }) => <ActionsCell row={row} table={table} />,
        },
    ];
    return columns;


};


export const columns = (columnNames: any[]) => {
    const columns = createColumnsFromData(columnNames);
    console.log(`columns`, columns);
    return columns
};



// function downloadFile(selectedData) {
//     // 获取选中行的数据

//     // 创建一个新的工作簿
//     const wb = XLSX.utils.book_new();

//     // 将数据转换为工作表
//     const ws = XLSX.utils.json_to_sheet(selectedData);

//     // 将工作表添加到工作簿
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     // 将工作簿写入文件
//     const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

//     // 创建一个 Blob 对象
//     const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

//     // 使用 file-saver 库保存文件
//     saveAs(blob, 'file.xlsx');
// }

// // 将字符串转换为 ArrayBuffer
// function s2ab(s) {
//     const buf = new ArrayBuffer(s.length);
//     const view = new Uint8Array(buf);
//     for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
//     return buf;
// }

const ActionsCell = ({ row, table }: { row: any, table: any }) => {
    const [result, setResult] = useState({
        WorkflowName: '',
        WorkflowCount: 0,
        SuccessfulCount: 0,
        WorkflowStep: 0,
        excelData: [],
        falseTrueRows: [],
        jsonObject: {}
    });
    const [isOpen, setIsOpen] = useState(false);
    const [workflowName, setWorkflowName] = useState('');
    const [runresult, setRunresult] = useState('');
    const [selectedValue_1, setSelectedValue_1] = useState('');
    const [selectedValue_2, setSelectedValue_2] = useState('');
    const [num, setNum] = useState(1);
    function getSelectedData() {
        // 获取表格的所有行
        // 这个方法取决于你正在使用的表格库
        console.log(`table`, table);
        const selectedRows = table.getSelectedRowModel();
        console.log('Selected rows:', selectedRows);

        // 创建一个空数组来存储选中行的数据
        const selectedData = [];

        // 遍历所有的行
        for (const row of selectedRows.rows) {
            // 如果这一行是被选中的
            console.log(`row`, row);
            console.log('row.original', row.original)
            selectedData.push(row.original);
        }
        console.log(`selectedData`, selectedData);
        return selectedData;
    }


    const handleValueChange_1 = (value: React.SetStateAction<string>) => {
        console.log("选中的值:", value);
        setSelectedValue_1(value);
    };
    const handleValueChange_2 = (value: React.SetStateAction<string>) => {
        console.log("选中的值:", value);
        setSelectedValue_2(value);
    };


    const processRow = async (sortedData:any,row: any) => {
        try {
            console.log('Processing row:', row);
            const runresult = await fetchWsEndpoint(sortedData,row);
            console.log('runresult:', runresult);
            return { ...row, status: runresult };
        } catch (error) {
            console.error('Error processing row:', error);
            return { ...row, status: 'Error' };
        }
    };

    async function processRows(sortedData: any, dataObjects: string | any[], start: number, step: number) {
        for (let i = start; i < dataObjects.length; i += step) {
            const row = dataObjects[i];
             const processedData = [];
            try {
                const processedRow = await processRow(sortedData, row);
                processedData.push(processedRow);
            } catch (error) {
                console.error('Error processing row:', error);
                processedData.push({ ...row, status: 'Error' });
            }
        }
    }

    const processDataObjects = async (num:any,sortedData: any, dataObjects: any) => {
        console.log('dataObjects:', dataObjects);
        console.log('sortedData:', sortedData);
        const promises = [];
        for (let i = 0; i < num; i++) {
            promises.push(processRows(sortedData, dataObjects, i, num));
        }
        const processedData=await Promise.all(promises);
        return processedData;
    };




    const fetchWsEndpoint = async (sortedData:any,row: any) => {
        let searchResults = false; // 添加这一行
        try {
            const res = await fetch('/api/browser_run', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sortedData, row, selectedValue_1, selectedValue_2 })
            });
            const reader = res.body?.getReader();
            const decoder = new TextDecoder('utf-8');
            let result = '';

            while (true) {
                const { done, value } = await reader?.read() ?? { done: true, value: undefined };
                if (done) break;

                const text = decoder.decode(value, { stream: true });
                console.log('Response text:', text);
                result += text;

                // 用正则表达式确保每个 JSON 对象都是正确的
                const jsonStrings = result.split('\n').filter(str => str.trim());
                console.log('jsonStrings:', jsonStrings);
                jsonStrings.forEach(jsonStr => {
                    try {
                        const parsedData = JSON.parse(jsonStr);
                        if (parsedData.wsEndpoint) {
                            // setWsEndpoint(parsedData.wsEndpoint);
                        } else if (parsedData.monitorResults) {
                            console.log('monitorResults_run', parsedData.monitorResults);
                        }
                        else if (parsedData.runresult) {
                            console.log('runresult', parsedData.runresult);
                            setRunresult(parsedData.runresult)
                        }
                    } catch (e) {
                        console.error('Error parsing JSON:', e);
                    }
                });
            }

        } catch (e) {
            console.error('Error fetching wsEndpoint:', e);
        }
        return runresult;
    };

    const Renewaldata = async (workflowName: any, excelData_new: any) => {
        try {
            const res = await fetch('/api/renewworkflow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ workflowName, excelData_new })
            });
            if (res.ok) {
                const data = await res.json();
                console.log('Data:', data);
                // 如果服务器返回的消息表示成功，那么导航到新的页面
                if (data.message === "Workflow created successfully") {
                }
            } else {
                console.error('Server error:', await res.text());
            }

        } catch (e) {
            console.error('Error fetching:', e);
        }
    };




    const fetchData = async (cellValue: any) => {
        try {
            const res = await fetch('/api/readworkflow_detail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cellValue })
            });
            if (res.ok) {
                const data = await res.json();
                console.log('Data:', data);
                setResult(data.result);
                return data.result
            } else {
                console.error('Server error:', await res.text());
            }
        } catch (e) {
            console.error('Error fetching:', e);
        }
    };

    const handleRun = async () => {
        const selectdata=getSelectedData()
        const cellValue = row.getValue("WorkflowName") as string;
        console.log('cellValue:', cellValue);
        console.log('num:', num);
        // setWorkflowName(cellValue)
        if (cellValue) {
            const result=await fetchData(cellValue)
            const processedData = await processDataObjects(num,result.jsonObject, result.excelData);
            console.log('Processed Data_f:', processedData);
            await Renewaldata(cellValue, processedData);
        }
       
    };
    useEffect(() => {
        console.log("isOpen:", isOpen);
    }, [isOpen]); // 当 isOpen 状态发生变化时执行



    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">开始执行</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>进行配置</DialogTitle>
                            <DialogDescription>
                                输入对应的配置内容，包括并发的数量、是否开启表头、是否针对未成功任务重跑
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="num" className="text-right">
                                并发数量
                            </Label>
                            <Input id="num" value={num} onChange={e => setNum(Number(e.target.value))} className="col-span-3" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">是否开启表头</Label>
                            <Select onValueChange={handleValueChange_1}>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="true">是</SelectItem>
                                    <SelectItem value="false">否</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">是否重跑</Label>
                            <Select onValueChange={handleValueChange_2}>
                                <SelectTrigger id="framework">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="true">是</SelectItem>
                                    <SelectItem value="false">否</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">

                            </div>
                        </div> */}
                        <DialogFooter className="flex justify-between">
                            
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    取消
                                </Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button type="submit" onClick={handleRun}>执行</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem onClick={() => downloadFile(getSelectedData())}>下载文件</DropdownMenuItem> */}
                {/* <DropdownMenuItem>开启跟价</DropdownMenuItem>
                <DropdownMenuItem>优化文案</DropdownMenuItem>
                <DropdownMenuItem>优化图片</DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};


export default function MyPage() {
    return <div>Hello, world!</div>;
}