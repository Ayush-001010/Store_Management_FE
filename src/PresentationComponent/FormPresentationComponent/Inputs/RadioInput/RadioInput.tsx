import React from "react";
import IRadioInput from "./IRadioInput";
import { Radio } from "antd";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";
import LabelBox from "../LabelBox/LabelBox";

const RadioInput: React.FC<IRadioInput> = ({ config , formik }) => {

  const changeHandler = (e: any) => {
    formik.setFieldValue(config.backendName, e.target.value);
  };
  const blurHandler = (e: any) => {
    formik.setFieldTouched(config.backendName, true);
  };

  return (
    <div className="w-full flex flex-col mt-1">
      <LabelBox text={config.displayName} />
      <Radio.Group options={config.options || []} onChange={changeHandler} onBlur={blurHandler} className="text-sm font-medium text-[#6c757d] m-1" />
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
