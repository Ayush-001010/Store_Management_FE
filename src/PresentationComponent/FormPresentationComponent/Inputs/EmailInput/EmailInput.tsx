import React from "react";
import IEmailInput from "./IEmailInput";
import { Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";
import LabelBox from "../LabelBox/LabelBox";

const EmailInput: React.FC<IEmailInput> = ({ config, formik }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(config.backendName, e.target.value);
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldTouched(config.backendName, true);
  };
  return (
    <div className="w-full mt-1">
      <LabelBox text={config.displayName} />
      <Input
        className="w-full mt-1"
        addonBefore={<MailOutlined />}
        type="email"
        onChange={changeHandler}
        onBlur={blurHandler}
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

export default EmailInput;
