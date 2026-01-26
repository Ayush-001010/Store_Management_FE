import { FormikProps } from "formik";
import {FormConfig} from "../../../../Types/FormConfig";

export default interface IPasswordInput {
  config: FormConfig;
  formik: FormikProps<any>;
}
