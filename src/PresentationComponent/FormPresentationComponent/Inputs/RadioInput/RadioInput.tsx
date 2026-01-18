import React from "react";
import IRadioInput from "./IRadioInput";
import { Radio } from "antd";

const RadioInput: React.FC<IRadioInput> = ({ config }) => {
  return (
    <div>
      <label>{config.displayName}</label>
      <Radio.Group options={config.options || []} />
    </div>
  );
};

export default RadioInput;
