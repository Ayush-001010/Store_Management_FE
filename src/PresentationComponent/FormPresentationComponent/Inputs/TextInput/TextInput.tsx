import React from "react";
import ITextInput from "./ITextInput";
import { Input } from "antd";

const TextInput: React.FC<ITextInput> = ({ config }) => {
  return (
    <div>
      <label>{config.displayName}</label>
      <Input />
    </div>
  );
};

export default TextInput;
