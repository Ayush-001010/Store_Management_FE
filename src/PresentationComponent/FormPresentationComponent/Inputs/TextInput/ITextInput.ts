import { FormikProps } from "formik";
import { FormConfig } from "../../../../Types/FormConfig";

export default interface ITextInput {
    config: FormConfig;
    formik: FormikProps<any>;
    isSmall?: boolean;
}