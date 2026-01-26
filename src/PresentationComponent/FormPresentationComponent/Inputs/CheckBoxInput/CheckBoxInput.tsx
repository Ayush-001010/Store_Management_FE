import React from "react";
import ICheckBoxInput from "./ICheckBoxInput";
import { Checkbox, CheckboxChangeEvent } from "antd";
import LabelBox from "../LabelBox/LabelBox";
import ErrorMessageDisplay from "../ErrorMessageDisplay/ErrorMessageDisplay";

const CheckBoxInput: React.FC<ICheckBoxInput> = ({ config, isSmall,formik }) => {
  const changeHandler = (e: CheckboxChangeEvent) => {
    formik.setFieldValue(config.backendName, e.target.checked);
    formik.setFieldTouched(config.backendName, true);
  }
  return (
    <div className="w-full mt-1 flex items-center gap-2">
      <LabelBox text={config.displayName} isSmall={isSmall} />
      <Checkbox onChange={changeHandler} />
      {formik.touched[config.backendName] &&
        formik.errors[config.backendName] && (
          <ErrorMessageDisplay
            message={formik.errors[config.backendName] as string}
          />
        )}
    </div>
  );
};

export default CheckBoxInput;
