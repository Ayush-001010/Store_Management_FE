import React from "react";
import IEmailInput from "./IEmailInput";
import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";

const EmailInput : React.FC<IEmailInput> = ({config}) => {
    return (
        <div>
            <label>{config.displayName}</label>
            <Input addonBefore={<MailOutlined />} type="email" />
        </div>
    )
};

export default EmailInput;