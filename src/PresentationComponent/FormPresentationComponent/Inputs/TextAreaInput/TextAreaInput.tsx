import React from "react";
import ITextAreaInput from "./ITextAreaInput";
import { Input } from "antd";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";
import LabelBox from "../LabelBox/LabelBox";

const TextAreaInput: React.FC<ITextAreaInput> = ({ config, formik , isSmall }) => {
  const changeHandler = (e: any) => {
    formik.setFieldValue(config.backendName, e.target.value);
  };
  const blurHandler = () => {
    formik.setFieldTouched(config.backendName, true);
  };
  return (
    <div>
      <LabelBox text={config.displayName}  isSmall={isSmall}/>
      <Input.TextArea
        value={formik.values[config.backendName]}
        onChange={changeHandler}
        onBlur={blurHandler}
        className={"" + (isSmall ? "h-20" : "")}
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
