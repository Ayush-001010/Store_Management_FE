import { FormikProps } from "formik";
import { FormConfig } from "../../../../Types/FormConfig";

export default interface IEmailInput {
  config: FormConfig;
  formik: FormikProps<any>;
}
