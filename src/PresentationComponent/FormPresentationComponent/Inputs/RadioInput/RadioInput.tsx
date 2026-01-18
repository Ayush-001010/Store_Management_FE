import React from "react";
import IRadioInput from "./IRadioInput";
import { Radio } from "antd";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";

const RadioInput: React.FC<IRadioInput> = ({ config , formik }) => {

  const changeHandler = (e: any) => {
    formik.setFieldValue(config.backendName, e.target.value);
  };
  const blurHandler = (e: any) => {
    formik.setFieldTouched(config.backendName, true);
  };

  return (
    <div>
      <label>{config.displayName}</label>
      <Radio.Group options={config.options || []} onChange={changeHandler} onBlur={blurHandler} />
      {formik.touched[config.backendName] &&
        formik.errors[config.backendName] && (
          <ErrorMessageDisplay
            message={formik.errors[config.backendName] as string}
          />
        )}
    </div>
  );
};

export default RadioInput;
