import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useExcelData } from '../contexts/AppContext';
import * as XLSX from 'xlsx';
import Cookies from 'js-cookie';
function LoginButton({ cityname, keyword }: { cityname: any, keyword: any }) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { excelData, setWorkflowData, setWorkflowurl } = useExcelData();
    const [wsEndpoint, setWsEndpoint] = useState(null);
    const [monitorResults, setMonitorResults] = useState("");
    const [videoUrl, setVideoUrl] = useState('');
    const [cookies, setCookies] = useState('');
    // useEffect(() => {
    //     console.log('monitorResults', monitorResults);
    //     console.log('videoUrl', videoUrl);
    // }, [monitorResults, videoUrl]);

    const fetchWsEndpoint = async () => {
        const res = await fetch('http://localhost:8082/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: "https://www.dianping.com/", task_name: cityname + "_" + keyword })
        });
        
        if (res.ok) {
            console.log('API 调用成功');
            const data = await res.json();
            console.log(data); // 打印返回的数据
        } else {
            console.log('API 调用失败，HTTP 状态码：' + res.status);
        }
    };

    const handleClick = async (event: React.MouseEvent) => {
        event.preventDefault();
        console.log("handleClick 被调用");
        await fetchWsEndpoint();
        console.log('完成登录验证');
    };
    return (
        <div>
            <button
                className="cursor-pointer py-2 px-[13px] bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border"
                onClick={handleClick}
            >
                <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                    alt=""
                    src="/video-recorder.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                    <div className="relative text-sm leading-[10px] font-semibold font-text-sm-semibold text-component-colors-components-buttons-secondary-button-secondary-fg text-left inline-block min-w-[60px]">
                        登录验证
                    </div>
                </div>
            </button>
        </div>
    );
}

export default LoginButton;

function parseFile(file: File | undefined) {
    throw new Error('Function not implemented.');
}
