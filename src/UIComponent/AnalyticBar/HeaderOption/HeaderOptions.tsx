import React from "react";
import IHeaderOptions from "./IHeaderOptions";
import { useGetAnalyticBarContext } from "../AnalyticBar";
import { Button, Select, Tooltip } from "antd";

const HeaderOptions: React.FC<IHeaderOptions> = () => {
  const {
    options,
    analyticValue,
    changeHandler,
    applyHandler,
    isSpecificFieldSelected,
    specificFieldName,
    specificFieldSelectionHandler,
  } = useGetAnalyticBarContext();

  const selectChangeHandler = (key: string, value: string) => {
    changeHandler(key, value);
    if (
      isSpecificFieldSelected &&
      specificFieldName === key &&
      specificFieldSelectionHandler
    )
      specificFieldSelectionHandler(value);
  };
  return (
    <div className="flex justify-between gap-2 my-3 bg-[#fbfefb] mx-2 shadow-md p-2 rounded-lg">
      {options.map((config) => (
        <div>
          <p className="font-medium mb-1 text-[#7f7f7f] text-xs">
            {config.label}
            <span className="text-[#9d0208] mx-1">*</span>
            <span className="cursor-pointer">
              <Tooltip title={config.description}>
                <i className="bi bi-info-circle" />
              </Tooltip>
            </span>
          </p>
          <div>
            <Select
              className="w-full"
              onChange={(newValue) =>
                selectChangeHandler(config.backendKey, newValue)
              }
              options={config.options}
              value={analyticValue[config.backendKey] || null}
            />
          </div>
        </div>
      ))}
      <div className="self-end">
        <Button className="bg-[#595959] shadow-lg text-white hover:bg-[#595959] hover:shadow-lg" onClick={applyHandler}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default HeaderOptions;
