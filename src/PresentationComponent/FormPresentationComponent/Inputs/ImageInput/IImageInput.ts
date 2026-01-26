import { FormikProps } from "formik";
import { FormConfig } from "../../../../Types/FormConfig";

export default interface IImageInput {
  config: FormConfig;
  formik: FormikProps<any>;
}
