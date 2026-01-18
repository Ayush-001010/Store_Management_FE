import React from "react";
import IFormBodyType1 from "./IFormBodyType1";
import { useGetFormContext } from "../../FormUI";
import IFormDisplayTypeConfig, {
  FormConfig,
} from "../../../../Types/FormConfig";
import TextInput from "../../../../PresentationComponent/FormPresentationComponent/Inputs/TextInput/TextInput";
import EmailInput from "../../../../PresentationComponent/FormPresentationComponent/Inputs/EmailInput/EmailInput";
import PasswordInput from "../../../../PresentationComponent/FormPresentationComponent/Inputs/PasswordInput/PasswordInput";
import RadioInput from "../../../../PresentationComponent/FormPresentationComponent/Inputs/RadioInput/RadioInput";
import ImageInput from "../../../../PresentationComponent/FormPresentationComponent/Inputs/ImageInput/ImageInput";

const FormBodyType1: React.FC<IFormBodyType1> = () => {
  const { formConfig, formik } = useGetFormContext();
  return (
    <div>
      {formConfig.map((config: IFormDisplayTypeConfig) => {
        return (
          <div>
            {config.fields.map((field: FormConfig) => {
              console.log("Rendering field:", field);
              switch (field.type) {
                case "text":
                  return <TextInput config={field} formik={formik} />;
                case "email":
                  return <EmailInput config={field} formik={formik} />;
                case "password":
                  return <PasswordInput config={field} formik={formik} />;
                case "radio":
                  return <RadioInput config={field} formik={formik} />;
                case "image":
                  return <ImageInput config={field} formik={formik} />;
                default:
                  return <p>Something you do wrong....</p>;
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
export default FormBodyType1;
