import { FormikProps } from "formik";
import { FormConfig } from "../../../../Types/FormConfig";

export default interface IRadioInput {
  config: FormConfig;
  formik: FormikProps<any>;
}
