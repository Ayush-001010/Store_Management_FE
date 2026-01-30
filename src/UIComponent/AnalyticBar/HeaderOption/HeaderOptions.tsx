import React from "react";
import IHeaderOptions from "./IHeaderOptions";
import { useGetAnalyticBarContext } from "../AnalyticBar";
import { Button, Select, Tooltip } from "antd";

const HeaderOptions: React.FC<IHeaderOptions> = () => {
  const { options, analyticValue , changeHandler , applyHandler , isSpecificFieldSelected , specificFieldName , specificFieldSelectionHandler } = useGetAnalyticBarContext();

  const selectChangeHandler = (key: string, value: string) => {
    console.log(key , value);
    changeHandler(key , value);
    if(isSpecificFieldSelected && specificFieldName === key && specificFieldSelectionHandler) 
      specificFieldSelectionHandler(value);
  }
  return (
    <div>
      {options.map((config) => (
        <div>
          <p>
            {config.label}
            <span>*</span>
            <span>
              <Tooltip title={config.description}>
                <i className="bi bi-info-circle" />
              </Tooltip>
            </span>
          </p>
          <div>
            <Select onChange={(newValue) => selectChangeHandler(config.backendKey , newValue)} options={config.options} value={analyticValue[config.backendKey] || null}/>
          </div>
        </div>
      ))}
      <Button onClick={applyHandler}>Apply</Button>
    </div>
  );
};

export default HeaderOptions;
