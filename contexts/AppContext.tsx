import React, { createContext, useState, useContext, Dispatch, SetStateAction, useEffect } from 'react';

type ExcelDataState = {
  excelData: any;
  setExcelData: Dispatch<SetStateAction<any>>;
  shuruData: any;
  setShuruData: Dispatch<SetStateAction<any>>;
  shuruData_new: any;
  setShuruData_new: Dispatch<SetStateAction<any>>;
};

// 创建一个新的 Context 对象，并提供一个默认值
const ExcelDataContext = createContext<ExcelDataState>({
  excelData: null,
  setExcelData: () => { },
  shuruData: null,
  setShuruData: () => { },
  shuruData_new: null,
  setShuruData_new: () => { },
});

// 创建一个 Provider 组件
export const ExcelDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [excelData, setExcelData] = useState<any>(null);
  const [shuruData, setShuruData] = useState<any>(null);
  const [shuruData_new, setShuruData_new] = useState<any>(null);


  // useEffect(() => {
  //   console.log('excelData', excelData);
  // }, [excelData]); // 依赖项数组中包含 excelData

  return (
    <ExcelDataContext.Provider value={{ excelData, setExcelData, shuruData, setShuruData, shuruData_new, setShuruData_new }}>
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