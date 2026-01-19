import { FormikProps } from "formik/dist/types";
import { FormConfig } from "../../../../Types/FormConfig";
import { IOptionInterface } from "../../../../Types/CommonInterface";

export default interface ISelectInput {
  config: FormConfig;
  formik: FormikProps<any>;
  options: Array<IOptionInterface>;
}
