import React from "react";
import ISelectInput from "./ISelectInput";
import { Select } from "antd";

const SelectInput: React.FC<ISelectInput> = ({ config , options , formik }) => {

  const changeHandler = (value: string) => {
    formik.setFieldValue(config.backendName, value);
    formik.setFieldTouched(config.backendName, true);
  };


  return (
    <div>
      <label>{config.displayName}</label>
      <Select options={options} value={formik.values[config.backendName]} onChange={changeHandler} />
    </div>
  );
};

export default SelectInput;
