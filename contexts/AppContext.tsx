import React, { createContext, useState, useContext, Dispatch, SetStateAction, useEffect } from 'react';

type ExcelDataState = {
  excelData: any;
  setExcelData: Dispatch<SetStateAction<any>>;
  shuruData: any;
  setShuruData: Dispatch<SetStateAction<any>>;
  shuruData_new: any;
  setShuruData_new: Dispatch<SetStateAction<any>>;
  shuruData_final: any;
  setShuruData_final: Dispatch<SetStateAction<any>>;
  workflowData: any;
  setWorkflowData: Dispatch<SetStateAction<any>>;
  workflowData_final: any;
  setWorkflowData_final: Dispatch<SetStateAction<any>>;
  workflowurl: any;
  setWorkflowurl: Dispatch<SetStateAction<any>>;
  cityname: any;
  setCityname: Dispatch<SetStateAction<any>>;
  keyword: any;
  setKeyword: Dispatch<SetStateAction<any>>;
};

// 创建一个新的 Context 对象，并提供一个默认值
const ExcelDataContext = createContext<ExcelDataState>({
  excelData: null,
  setExcelData: () => { },
  shuruData: null,
  setShuruData: () => { },
  shuruData_new: null,
  setShuruData_new: () => { },
  shuruData_final: null,
  setShuruData_final: () => { },
  workflowData: null,
  setWorkflowData: () => { },
  workflowData_final: null,
  setWorkflowData_final: () => { },
  workflowurl: null,
  setWorkflowurl: () => { },
  cityname: null,
  setCityname: () => { },
  keyword: null,
  setKeyword: () => { },
});

// 创建一个 Provider 组件
export const ExcelDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [excelData, setExcelData] = useState<any>(null);
  const [shuruData, setShuruData] = useState<any>(null);
  const [shuruData_new, setShuruData_new] = useState<any>(null);
  const [shuruData_final, setShuruData_final] = useState<any>(null);
  const [workflowData, setWorkflowData] = useState<any>(null);
  const [workflowData_final, setWorkflowData_final] = useState<any>(null);
  const [workflowurl, setWorkflowurl] = useState<any>(null);
  const [cityname, setCityname] = useState<any>(null);
  const [keyword, setKeyword] = useState<any>(null);

  // useEffect(() => {
  //   console.log('excelData', excelData);
  // }, [excelData]); // 依赖项数组中包含 excelData

  return (
    <ExcelDataContext.Provider value={{ excelData, setExcelData, shuruData, setShuruData, shuruData_new, setShuruData_new, shuruData_final, setShuruData_final, workflowData, setWorkflowData, workflowData_final, setWorkflowData_final, workflowurl, setWorkflowurl, cityname, setCityname, keyword, setKeyword }}>
      {children}
    </ExcelDataContext.Provider>
  );
};


// 创建一个自定义的 Hook
export const useExcelData = () => {
  // console.log('ExcelDataContext', ExcelDataContext);
  const context = useContext(ExcelDataContext);
  if (context === undefined) {
    throw new Error('useExcelData must be used within a ExcelDataProvider');
  }
  return context;
};