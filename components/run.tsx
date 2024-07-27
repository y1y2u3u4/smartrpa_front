import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useExcelData } from '../contexts/AppContext';
import * as XLSX from 'xlsx';
import Cookies from 'js-cookie';








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
        const res = await fetch('/api/readworkflow_1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cellValue })
        });
        if (res.ok) {
            const data = await res.json();
            console.log('Data:', data);
            // setResult(data.result);
            return data.result
        } else {
            console.error('Server error:', await res.text());
        }
    } catch (e) {
        console.error('Error fetching:', e);
    }
};


const getData_gaode = async (keywords: string) => {
    try {
        const url = `https://restapi.amap.com/v5/place/text?keywords=${encodeURIComponent(keywords)}&region=北京市&key=e5fa6ceff746bd2728fd7ab09823141c&show_fields=business`;
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            const data = await res.json();
            console.log('Data:', data);

            // 提取 pois 中的第一个对象的名称和电话字段
            if (data.pois && data.pois.length > 0) {
                const firstPoi = data.pois[0];
                const result = {
                    name: firstPoi.name,
                    address: firstPoi.address,
                    phone: firstPoi.business.tel
                };
                console.log('Extracted Data:', result);
                return result;
            } else {
                console.error('No POIs found.');
            }
        } else {
            console.error('Server error:', await res.text());
        }
    } catch (e) {
        console.error('Error fetching:', e);
    }
};

const getData_tengxun = async (keywords: string) => {
    try {
        const res = await fetch('/api/getData_tengxun', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ keywords })
        });
        if (res.ok) {
            const data = await res.json();
            console.log('data.result:', data);
            return data;
        } else {
            console.error('Server error:', await res.text());
        }
    } catch (e) {
        console.error('Error fetching:', e);
    }
};



const getData_baidu = async (keywords: string) => {
    try {
        const res = await fetch('/api/getData_baidu', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ keywords })
        });
        if (res.ok) {
            const data = await res.json();
            console.log('data.result:', data);
            return data;
        } else {
            console.error('Server error:', await res.text());
        }
    } catch (e) {
        console.error('Error fetching:', e);
    }
};


const getAllData = async (keywords: string) => {
    const [gaodeData, tengxunData, baiduData] = await Promise.all([
        getData_gaode(keywords),
        getData_tengxun(keywords),
        getData_baidu(keywords)
    ]);



    return {
        gaode: gaodeData || { name: null, address: null, phone: null },
        tengxun: tengxunData || { name: null, address: null, phone: null },
        baidu: baiduData || { name: null, address: null, phone: null }
    };
};




function RunButton({ cityname, keyword }: { cityname: any, keyword: any }) {
    const [runresult, setRunresult] = useState('');
    const [runoutput, setRunoutput] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { excelData, workflowData_final, setWorkflowData, setWorkflowurl } = useExcelData();
    const [wsEndpoint, setWsEndpoint] = useState(null);
    const [monitorResults, setMonitorResults] = useState("");
    const [videoUrl, setVideoUrl] = useState('');
    const [cookies, setCookies] = useState('');
    const [row, setRow] = useState({ cityname: '', keyword: '' }); // 初始化 row 为一个对象
    
    useEffect(() => {
        console.log('cityname:', cityname);
        console.log('keyword:', keyword);

        setRow({ cityname: cityname, keyword: keyword});
    }, [cityname, keyword]);

    const fetchWsEndpoint = async (sortedData: any, row: any) => {
        let runoutput;
        let runresult;
        try {
            const res = await fetch('http://localhost:8082/scrape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sortedData, row, task_name: cityname + "_" + keyword })
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
                            runresult = parsedData.runresult
                            console.log('runresult', parsedData.runresult);
                            setRunresult(parsedData.runresult)
                        }
                        else if (parsedData.runoutput) {
                            console.log('runoutput', parsedData.runoutput);
                            runoutput = parsedData.runoutput
                            setRunoutput(parsedData.runoutput)
                        }
                    } catch (e) {
                        console.error('Error parsing JSON:', e);
                    }
                });
            }

        } catch (e) {
            console.error('Error fetching wsEndpoint:', e);
        }
        return { runoutput, runresult };
    };

    const processRow = async (sortedData:any,row: any) => {
        try {
            console.log('Processing row:', row);
            console.log('Processing cityname:', row.cityname);
            console.log('Processing keyword:', row.keyword);

            const { runoutput, runresult } = await fetchWsEndpoint(sortedData,row);
            console.log('runoutput:', runoutput);
            console.log('runresult:', runresult);
            return { ...row, output: runoutput, status: runresult };
        } catch (error) {
            console.error('Error processing row:', error);
            return { ...row, status: 'Error' };
        }
    };

    //调用 api 接口处理
    // const processRow = async (sortedData: any, row: any) => {
    //     try {
    //         console.log('Processing row:', row);
    //         console.log('Processing row_name:', row.name);

    //         const allData = await getAllData(row.name);
    //         console.log('All Data:', allData);
    //         return {
    //             ...row,
    //             gaodeName: allData.gaode.name,
    //             gaodeAddress: allData.gaode.address,
    //             gaodePhone: allData.gaode.phone,
    //             tengxunName: allData.tengxun.name,
    //             tengxunAddress: allData.tengxun.address,
    //             tengxunPhone: allData.tengxun.phone,
    //             baiduName: allData.baidu.name,
    //             baiduAddress: allData.baidu.address,
    //             baiduPhone: allData.baidu.phone
    //         };
    //     } catch (error) {
    //         console.error('Error processing row:', error);
    //         return { ...row, status: 'Error' };
    //     }
    // };

    async function processRows(sortedData: any, start: number, step: number) {
        const processedData = [];
        try {
            const processedRow = await processRow(sortedData, row);
            console.log('processedRow:', processedRow);
            processedData.push(processedRow);
        } catch (error) {
            console.error('Error processing row:', error);
            processedData.push({ ...row, status: 'Error' });
        }

        // for (let i = start; i < 1; i += step) {
        //     const row = dataObjects[i];

        //     try {
        //         const processedRow = await processRow(sortedData, row);
        //         console.log('processedRow:', processedRow);
        //         processedData.push(processedRow);
        //     } catch (error) {
        //         console.error('Error processing row:', error);
        //         processedData.push({ ...row, status: 'Error' });
        //     }

        // }

        return processedData;

    }

    const processDataObjects = async (num: any, sortedData: any) => {
        console.log('sortedData:', sortedData);
        const promises = [];
        for (let i = 0; i < num; i++) {
            promises.push(processRows(sortedData, i, num));
        }
        const processedData = await Promise.all(promises);
        console.log('processedData:', processedData);
        return processedData;
    };

    const handleClick = async (event: React.MouseEvent) => {
        const num=1
        // const cellValue ='大众店铺查询测试_1'
        // const result = await fetchData(cellValue)
        // const processedData = await processDataObjects(num, result.jsonObject);
        const processedData = await processDataObjects(num, workflowData_final);
        
        console.log('Processed Data_f:', processedData);
        // await Renewaldata(cellValue, processedData);
        
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
                        开始执行
                    </div>
                </div>
            </button>
            {/* <div>
                <div>Puppeteer 浏览器窗口</div>
                <button onClick={handleClick}>开始监控</button>
                {monitorResults && (
                    <div>
                        <h3>监控结果</h3>
                        <pre>{JSON.stringify(monitorResults, null, 2)}</pre>
                    </div>
                )}
                {videoUrl && (
                    <div>
                        <h3>录制的视频</h3>
                        <video controls src={videoUrl}></video>
                    </div>
                )}
            </div> */}
        </div>
    );
}

export default RunButton;

function parseFile(file: File | undefined) {
    throw new Error('Function not implemented.');
}
