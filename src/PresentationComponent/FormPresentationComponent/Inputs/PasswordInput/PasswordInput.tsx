import React from "react";
import IPasswordInput from "./IPasswordInput";
import { Input } from "antd";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";

const PasswordInput: React.FC<IPasswordInput> = ({ config , formik }) => {

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(config.backendName, e.target.value);
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    formik.setFieldTouched(config.backendName, true);
  };

  return (
    <div>
      <label>{config.displayName}</label>
      <Input type="password" onChange={changeHandler} onBlur={blurHandler} />
      {formik.touched[config.backendName] &&
        formik.errors[config.backendName] && (
          <ErrorMessageDisplay
            message={formik.errors[config.backendName] as string}
          />
        )}
    </div>
  );
};

export default PasswordInput;
