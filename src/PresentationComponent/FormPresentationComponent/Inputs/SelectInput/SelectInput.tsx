import React from "react";
import ISelectInput from "./ISelectInput";
import { Select } from "antd";

const SelectInput: React.FC<ISelectInput> = ({ config }) => {
  return (
    <div>
      <label>{config.displayName}</label>
      <Select />
    </div>
  );
};

export default SelectInput;
