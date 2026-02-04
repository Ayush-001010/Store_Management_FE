import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import IAnalyticBar from "./IAnalyticBar";
import HeaderOptions from "./HeaderOption/HeaderOptions";
import { AnalyticBarOptionInterface, AnalyticDataInterface } from "../../Types/AnalyticBarInterface";
import LineChartUI from "./ChartType/Line/Line";
import BarChartUI from "./ChartType/Bar/BarChart";

interface IAnalyticBarContext {
  options: Array<AnalyticBarOptionInterface>;
  analyticValue: Record<string, string>;
  analyticData : Array<AnalyticDataInterface>;
  changeHandler : (key : string , val : string) => void;
  applyHandler : () => void;
  isSpecificFieldSelected?: boolean;
  specificFieldName?: string;
  specificFieldSelectionHandler?: (value : string) => void;
}

const AnalyticBarContext = createContext<IAnalyticBarContext | undefined>(undefined);

export const useGetAnalyticBarContext = () => {
    const context = useContext(AnalyticBarContext);
      if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
      }
      return context;
    };

interface AnalyticBarComponent
  extends React.FC<IAnalyticBar & { children: ReactNode }> {
  HeaderOptions: React.FC;
}

const AnalyticBar: AnalyticBarComponent = ({options , children , analyticValue , chartType , analyticData , applyHandler , isSpecificFieldSelected , specificFieldName , specificFieldSelectionHandler }) => {
  const [value , setValue] = useState<Record<string, string>>({});

  const changeHandler = (key : string , val : string) => {
    setValue((prev)=>({
      ...prev,
      [key] : val
    }));
  }

  const applyHandlerFunc = () => {
    applyHandler(value);
  }

  useEffect(()=>{
    setValue(analyticValue);
  },[analyticValue]);
  return (
    <AnalyticBarContext.Provider value={{  options , analyticValue : value , analyticData , changeHandler , applyHandler : applyHandlerFunc , isSpecificFieldSelected , specificFieldName , specificFieldSelectionHandler }}>
        <div className="shadow-lg bg-[#f8f9fa] w-lg m-2 p-2 rounded-md">
            {children}
            {chartType === "line" && <LineChartUI />}
            {chartType === "bar" && <BarChartUI />}
        </div>
    </AnalyticBarContext.Provider>
  );
};

AnalyticBar.HeaderOptions = HeaderOptions;

export default AnalyticBar;
