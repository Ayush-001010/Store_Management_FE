import React from "react";
import ISelectInput from "./ISelectInput";
import { Select } from "antd";
import LabelBox from "../LabelBox/LabelBox";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";

const SelectInput: React.FC<ISelectInput> = ({
  config,
  options,
  formik,
  isSmall,
}) => {
  const changeHandler = (value: string) => {
    formik.setFieldValue(config.backendName, value);
    formik.setFieldTouched(config.backendName, true);
  };

  return (
    <div className="w-full mt-1 flex flex-col">
      <LabelBox text={config.displayName} isSmall={isSmall} />
      <Select
        className={"" + (isSmall ? "h-8" : "")}
        options={options}
        value={formik.values[config.backendName]}
        onChange={changeHandler}
      />
      {formik.touched[config.backendName] &&
        formik.errors[config.backendName] && (
          <ErrorMessageDisplay
            message={formik.errors[config.backendName] as string}
          />
        )}
    </div>
  );
};

export default SelectInput;
