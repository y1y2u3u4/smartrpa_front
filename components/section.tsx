import type { NextPage } from "next";
import { memo, useState } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ExcelDataProvider } from '@/contexts/AppContext';
import { useExcelData } from '@/contexts/AppContext';
import { DemoPage } from '@/components/payments/page';
import UploadButton from './upload';
import { useEffect } from 'react';
import MoniButton from "./moni";
import RunButton from "./run";
import LoginButton from "./login";
import React, { useRef } from 'react';
import { Input } from "@/components/ui/input"

const fetchData = async (cityname: string, keyword: string) => {
  try {
    const response = await fetch('/api/findtask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cityname: cityname, keyword: keyword })
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
const Section = ({ data, workflowurl }: { data: any, workflowurl: any }) => {
  const [cityname_input, setCityname_input] = useState(() => "");
  const [keyword_input, setKeyword_input] = useState(() => "");
  const [loading, setLoading] = useState(false);
  const [taskData, setTaskData] = useState(null);
  const { cityname, setCityname, keyword, setKeyword, shuruData, setShuruData, excelData, setExcelData } = useExcelData();

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword_input(event.target.value);
    setKeyword(event.target.value);
    console.log('keyword', keyword)

    setLoading(false);
  };
  const handleCitynameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityname_input(event.target.value);
    setCityname(event.target.value);
    console.log('cityname', cityname)
    setLoading(false);
  };
  const citynameRef = useRef(cityname);
  const keywordRef = useRef(keyword);

  useEffect(() => {
    citynameRef.current = cityname;
    keywordRef.current = keyword;
  }, [cityname, keyword]);

  useEffect(() => {
    const updateData = async () => {
      console.log('cityname_input:', citynameRef.current);
      console.log('keyword_input:', keywordRef.current);
      const data = await fetchData(citynameRef.current, keywordRef.current);
      setExcelData(data.runoutResults)
      // console.log('shuruData:', shuruData);
      // console.log('runoutResults:', data.runoutResults);
    };

    // Initial fetch
    updateData();

    // Set interval to fetch data every 10 seconds
    const intervalId = setInterval(updateData, 30000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-[557px] box-border flex flex-col items-start justify-start py-8 pr-0 pl-[31px] gap-[24px] min-w-[480px] max-w-full text-left text-lg text-colors-text-text-primary-900 font-text-sm-semibold border-r-[1px] border-solid border-colors-border-border-secondary mq675:min-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq800:pt-[21px] mq800:pb-[21px] mq800:box-border">
        <div className="w-[489px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-center py-2 px-0 box-border gap-[4px] min-w-[147px]">
              <div className="self-stretch relative leading-[28px] font-semibold flex justify-between items-center">
                {/* <div>关建词填写</div> */}
                <Input placeholder=" 输入城市" value={cityname_input} onChange={handleCitynameChange} style={{ width: 100 }} />
                <Input placeholder=" 输入关键词" value={keyword_input} onChange={handleKeywordChange} style={{ width: 120 }} />
                <LoginButton cityname={cityname_input} keyword={keyword_input} />
                <RunButton cityname={cityname_input} keyword={keyword_input}  />
              </div>
              <div className="self-stretch h-5 relative text-sm leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden overflow-hidden text-ellipsis whitespace-nowrap">
                Manage your team members and their account permissions here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};


export default Section;


