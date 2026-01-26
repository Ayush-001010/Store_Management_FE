import React from "react";
import ITextInput from "./ITextInput";
import { Input } from "antd";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";
import LabelBox from "../LabelBox/LabelBox";

const TextInput: React.FC<ITextInput> = ({ config, formik , isSmall }) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(config.backendName, e.target.value);
  };
  const blurHandler = () => {
    formik.setFieldTouched(config.backendName, true);
  };

  return (
    <div className="w-full mt-1">
      <LabelBox text={config.displayName} isSmall={isSmall} />
      <Input
        className={ "w-full mt-1 " + (isSmall ? "h-7" : "")}
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

export default TextInput;
