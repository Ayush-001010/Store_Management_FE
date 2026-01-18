import React from "react";
import ITextAreaInput from "./ITextAreaInput";
import { Input } from "antd";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";

const TextAreaInput: React.FC<ITextAreaInput> = ({ config, formik }) => {
  const changeHandler = (e: any) => {
    formik.setFieldValue(config.backendName, e.target.value);
  };
  const blurHandler = () => {
    formik.setFieldTouched(config.backendName, true);
  };
  return (
    <div>
      <label>{config.displayName}</label>
      <Input.TextArea
        value={formik.values[config.backendName]}
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

export default TextAreaInput;
