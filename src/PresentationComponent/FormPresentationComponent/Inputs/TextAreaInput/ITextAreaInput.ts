import { FormikProps } from "formik";
import { FormConfig } from "../../../../Types/FormConfig";

export default interface ITextAreaInput {
  config: FormConfig;
  formik: FormikProps<any>;
  isSmall?: boolean;
}
