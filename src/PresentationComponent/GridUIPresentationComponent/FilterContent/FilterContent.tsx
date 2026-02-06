import React, { useMemo } from "react";
import IFilterContent from "./IFilterContent";
import { Input, Select, TimePicker } from "antd";

const FilterContent: React.FC<IFilterContent> = ({gridFilterConfig , value , changeHandler}) => {
  const labelCss = useMemo(() => "text-sm  w-[140px]  mx-1 text-[#495057] font-medium mb-0 flex items-center font-semibold" , []);
  
  return (
    <div>
      {gridFilterConfig &&
        gridFilterConfig.map((filter, index) => {
          switch (filter.type) {
            case "text":
              return (
                <div className="mb-2 flex" key={index}>
                  <p className={labelCss}>{filter.headerName}:</p>
                  <Select
                    value={value[filter.field]}
                    options={[
                      { label: "Equal", value: "equal" },
                      { label: "Contain", value: "contain" },
                      { label: "Not Equal", value: "not_equal" },
                      { label:"No Filter", value: "no_filter"}
                    ]}
                    onChange={(selectedValue) => changeHandler(filter.field , selectedValue)}
                    className="w-[150px] mx-2 mb-2 rounded border-[#adb5bd] rounded px-2 py-1"
                  />
                  <Input
                    placeholder="Enter text"
                    className="w-[150px] mx-2 mb-2 roundedborder border-[#adb5bd] rounded px-2 py-1"
                    onChange={(e) => changeHandler(filter.field+"_Val" , e.target.value)}
                    value={value[filter.field+"_Val"] || ""}
                  />
                </div>
              );

            case "boolean": {
              return (
                <div className="mb-2 flex " key={index}>
                  <p className={labelCss}>{filter.headerName}:</p>
                  <Select
                    value={value[filter.field]}
                    options={[
                      { label: "Yes", value: "true" },
                      { label: "No", value: "false" },
                      { label: "No Filter", value: "no_filter" },
                    ]}
                    onChange={(selectedValue) => changeHandler(filter.field , selectedValue)}
                    className="w-full mb-2 rounded"
                  />
                </div>
              );
            }

            case "time": {
              return (
                <div className="mb-2 flex" key={index}>
                  <p className={labelCss}>{filter.headerName}:</p>
                  <TimePicker className="w-full" value={value[filter.field]} onChange={(newValue) => changeHandler(filter.field + "_Val" , newValue)} />
                </div>
              );
            }

            default:
              return null;
          }
        })}
    </div>
  );
};

export default FilterContent;
