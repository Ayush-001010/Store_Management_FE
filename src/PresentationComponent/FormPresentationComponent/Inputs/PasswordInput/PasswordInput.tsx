import React from "react";
import IPasswordInput from "./IPasswordInput";
import { Input } from "antd";

const PasswordInput: React.FC<IPasswordInput> = ({ config }) => {
  return (
    <div>
      <label>{config.displayName}</label>
      <Input type="password" />
    </div>
  );
};

export default PasswordInput;
