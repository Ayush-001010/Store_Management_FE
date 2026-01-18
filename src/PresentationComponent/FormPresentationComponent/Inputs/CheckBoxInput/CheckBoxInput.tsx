import React from "react";
import ICheckBoxInput from "./ICheckBoxInput";
import { Checkbox } from "antd";

const CheckBoxInput: React.FC<ICheckBoxInput> = ({config}) => {
    return (
        <div>
            <label>{config.displayName}</label>
            <Checkbox />
        </div>
    )
};

export default CheckBoxInput;