import type { NextPage } from "next";
import { memo } from "react";
import CodeSnippet from "./code-snippet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useExcelData } from '@/contexts/AppContext';
import React, { useState, useEffect } from 'react';
import AIButton from "@/components/aiagent";
import Workdashboad from "@/components/workdashboad";
import { Button } from "@/components/ui/button";
import { useRequest } from "ahooks";
import { toast } from "sonner";
import Cookies from 'js-cookie';

const Workflow: NextPage = memo(() => {
  const [selectedValue, setSelectedValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: 'Step 1',
      selectedValue: '',
      prompt: '',
      shuruneirong: '',
      shuchuneirong: ''
    }
  ]);
  const [activeStep, setActiveStep] = useState(1);
  const [prompt, setPrompt] = useState('');
  const [shuruneirong, setShuruneirong] = useState(''); // 初始值为 ''
  const [shuchuneirong, setShuchuneirong] = useState(''); // 初始值为 ''
  const { excelData, shuruData, setShuruData_new } = useExcelData();
  useEffect(() => {
    if (shuruData && shuruData.length > 0 && (selectedValue && shuruData[0][selectedValue] || selectedValue =='previous')) {
      // console.log('shuruData', shuruData);
      // console.log('shuruData_1', shuruData[0][selectedValue]);
      // console.log('activeStep', activeStep);
      console.log('steps', steps);
      setShuruneirong(shuruData[0][selectedValue])
      setShuchuneirong(shuchuneirong)
      const newSteps = [...steps];
      const stepIndex = newSteps.findIndex(s => s.id === activeStep);
      if (newSteps[stepIndex].selectedValue === 'previous' && stepIndex > 0) {
        newSteps[stepIndex].shuruneirong = newSteps[stepIndex - 1].shuchuneirong;
      } else {
        newSteps[stepIndex].shuruneirong = shuruData[0][newSteps[stepIndex].selectedValue];
      }
      setSteps(newSteps);
    }
  }, [shuruData, selectedValue, shuchuneirong, activeStep]);


  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    console.log('value', value);
    const newSteps = [...steps];
    const stepIndex = newSteps.findIndex(s => s.id === activeStep);
    if (stepIndex !== -1) {
      newSteps[stepIndex].selectedValue = value;
      setSteps(newSteps);
    }
  };




  const handleCreateStep = (event: React.MouseEvent) => {
    event.preventDefault();
    const newStepId = steps.length + 1;
    setSteps([...steps, {
      id: newStepId,
      title: `Step ${newStepId}`,
      selectedValue: '',
      prompt: '',
      shuruneirong: '',
      shuchuneirong: ''
    }]);
    setActiveStep(newStepId);
  };
  
  const handleStepClick = (id:any) => {
    setActiveStep(id);
  };

  const { runAsync: generate, data: ids } = useRequest(async () => {
    if (!excelData) {
      toast.error("Please input both description and user input");
      return;
    }
    let allData = []; 

    for (const step of steps) {
      // 创建一个数组，这个数组包含了所有的请求
      
      const requests = shuruData.map((input: { [x: string]: any; }) => {
        const description = step.prompt
        const user_input = step.selectedValue === 'previous' ? input[`${step.id - 1}&churuneirong`] : input[step.selectedValue];
        console.log(`description`, description);
        console.log(`user_input`, user_input);
        return fetch("/api/music/generate", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ description, user_input }),
        });
      });
      
      const responses = await Promise.all(requests);

      // 检查所有的响应是否都成功
      if (responses.some(response => !response.ok)) {
        toast.error("One or more requests failed");
        return;
      }

      const data = await Promise.all(responses.map(response => response.json()));

      const shuruData_new = shuruData.map((item: any, index: string | number) => ({
        ...item,
        [`${step.id}&churuneirong`]: data[index as number].data,
      }));
      setShuruData_new(shuruData_new);
      console.log(`shuruData_new`, shuruData_new);
      allData.push(data);
      
    }
    console.log(`allData`, allData);
    return allData;
  }, {
    manual: true,
    onSuccess: () => {
      toast.success("New operation succeeded");
      setLoading(false);
    },
    onError: () => {
      toast.error("Gen music failed");
      setLoading(false);
    }
  });

  const onSubmit = async function () {
    const model = Cookies.get('model')
    const API_KEY = Cookies.get('apiKey');
    // console.log("model", model);
    // console.log("API_KEY", API_KEY);

    if (!model || !API_KEY) {
      alert('Please select a model and input your OpenAI API Key.');
      return null;
    }
    setLoading(true);
    const data = await generate();

  };

  if (!excelData || excelData.length === 0) {
    return [];
  }
  // 假设 excelData 的第一行包含列名
  const columnNames = excelData[0];

  return (
    <div className="flex flex-col items-center justify-start py-8 px-0 box-border min-w-[480px] max-w-full ml-[-2px] text-left text-sm text-colors-text-text-quaternary-500 font-text-sm-semibold mq675:min-w-full mq450:pb-5 mq450:box-border mq800:pb-[21px] mq800:box-border">
      <div className="self-stretch flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border gap-[9px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-lg text-colors-text-text-primary-900">
          <div className="self-stretch flex flex-row items-center justify-between gap-[16px] max-w-full">
            <div className="flex flex-row items-center gap-[12px]">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`cursor-pointer px-4 py-2 rounded-md border ${activeStep === step.id ? 'border-component-colors-components-buttons-primary-button-primary-bg text-primary bg-gray-200' : 'border-gray-300 text-gray-500'}`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div className="relative leading-[20px] font-semibold inline-block min-w-[39px]">
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handleCreateStep} className="cursor-pointer py-2 px-[13px] bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-md overflow-hidden flex flex-row items-center justify-center gap-[4px] border-[1px] border-solid border-gray-300">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/pluscircle.svg"
              />
              <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="relative text-sm leading-[20px] font-semibold text-gray-700 text-left inline-block min-w-[81px]">
                  Create Step
                </div>
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-[16px] max-w-full">
            {steps.map((step) =>
              activeStep === step.id ? (
                <Workdashboad
                  key={step.id}
                  columnNames={columnNames}
                  handleSelectChange={handleSelectChange}
                  prompt={step.prompt}
                  setPrompt={(newPrompt) => {
                    const newSteps = [...steps];
                    const stepIndex = newSteps.findIndex(s => s.id === step.id);
                    newSteps[stepIndex].prompt = newPrompt;
                    setSteps(newSteps);
                  }}
                  shuruneirong={step.shuruneirong}
                  setShuruneirong={(newShuruneirong) => {
                    const newSteps = [...steps];
                    const stepIndex = newSteps.findIndex(s => s.id === step.id);
                    newSteps[stepIndex].shuruneirong = newShuruneirong;
                    setSteps(newSteps);
                  }}
                  shuchuneirong={step.shuchuneirong}
                  setShuchuneirong={(newShuchuneirong) => {
                    const newSteps = [...steps];
                    const stepIndex = newSteps.findIndex(s => s.id === step.id);
                    newSteps[stepIndex].shuchuneirong = newShuchuneirong;
                    setSteps(newSteps);
                  }}
                  previousShuchuneirong={steps[step.id - 2]?.shuchuneirong || ''}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
      <Button className="w-1/3 mt-4 font-bold" type="button" disabled={loading} onClick={onSubmit}>
        {(loading ? "Generating..." : "Generate")}
      </Button>
    </div>
  );
});

export default Workflow;
