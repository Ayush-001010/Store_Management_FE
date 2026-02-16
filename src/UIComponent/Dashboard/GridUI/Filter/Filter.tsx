import React, { useCallback, useEffect, useState }  from "react";
import IFilter from "./IFilter";
import { useGetDashboardContext } from "../../Dashboard";
import FilterContent from "../../../../PresentationComponent/GridUIPresentationComponent/FilterContent/FilterContent";
import { GridFilterInterface } from "../../../../Types/DashboardInterface";

const Filter: React.FC<IFilter> = ({filterHandler}) => {
  const { gridFilterConfig } = useGetDashboardContext();
  const [value , setValue] = useState<Record<string, any>>({});

  const setInitialValueHandler = useCallback((config : Array<GridFilterInterface>) => {
    const initialValue : Record<string, any> = {};
    config.forEach((filter) => {
      if(filter.type === "text" || filter.type === "boolean"){
        initialValue[filter.field] = "no_filter";
        if(filter.type === "text"){
          initialValue[filter.field+"_Val"] = "";
        }
      } else {
        initialValue[filter.field] = "";
      }
    });
    return initialValue;
  },[]);

  const changeHandler = (field : string , filterValue : any) => {
    setValue((prev) => ({
      ...prev,
      [field] : filterValue
    }));
  };

  const applyHandler = () => {
    filterHandler("apply" , value);
  }
  const clearHandler = () => {
    filterHandler("clear",value);
    setValue(setInitialValueHandler(gridFilterConfig || []));
  }

  useEffect(()=>{
    setValue(setInitialValueHandler(gridFilterConfig || []));
  },[gridFilterConfig]);
  return (
    <div className="p-3 h-[400px] w-[400px] bg-[#dee2e6] overflow-y-auto bg-white rounded shadow-md">
      <FilterContent gridFilterConfig={gridFilterConfig || []} value={value}  changeHandler={changeHandler}/>
      <div className="flex justify-end mt-4">
        <button onClick={clearHandler} className="bg-[#adb5bd] text-white px-4 py-2 rounded hover:bg-[#6c757d] transition duration-300 mr-2">
          Clear
        </button>
        <button onClick={applyHandler} className="bg-[#6c757d] text-white px-4 py-2 rounded hover:bg-[#495057] transition duration-300">
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
