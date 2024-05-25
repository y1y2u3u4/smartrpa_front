import type { NextPage } from "next";
import { useEffect } from 'react';
import React, { useRef, useState } from 'react';
import { memo } from "react";
import Section from "../components/section";

import Workflow from "../components/workflow";
import UploadButton from "../components/upload";
import DownloadButton from "../components/download";
import {Input_api} from "../components/input_api";
import { ExcelDataProvider } from '@/contexts/AppContext';
import { useExcelData } from '@/contexts/AppContext';


const MainContent: NextPage = memo(() => {
  const { excelData } = useExcelData();

  useEffect(() => {
    console.log('excelData:', excelData);
  }, [excelData]);
  return (
    <div className="m-0 w-[1128px] bg-colors-background-bg-primary max-w-full overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-12 box-border leading-[normal] tracking-[normal]">
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border gap-[20px_14px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[320px] max-w-full">
                <h1 className="m-0 self-stretch relative text-11xl leading-[38px] font-semibold font-text-sm-semibold text-colors-text-text-primary-900 text-left mq450:text-lg mq450:leading-[23px] mq800:text-[24px] mq800:leading-[30px]">
                  文档批量转化
                </h1>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px] mq450:flex-wrap">
                <Input_api />
                <UploadButton/>
                <DownloadButton />
              </div>
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden max-h-full hidden"
              alt=""
              src="/divider.svg"
            />
          </div>
        </div>
      </div>
      
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full">
        
        <Section data={excelData} />
        <Workflow />
        
      </section>
    </div>
  
  );
});
 
const Main: NextPage = () => (
  <ExcelDataProvider>
    <MainContent />
  </ExcelDataProvider>
);

export default Main;