import { FormikProps } from "formik/dist/types";
import { FormConfig } from "../../../../Types/FormConfig";

export default interface ISelectInput {
  config: FormConfig;
  formik: FormikProps<any>;
}
