import React, { createContext, ReactNode, useContext } from "react";
import { IForm } from "./IForm";
import HeaderText from "../../PresentationComponent/FormPresentationComponent/HeaderText/HeaderText";
import useFormAction from "../../Services/Hooks/useFormAction";
import { Formik, FormikProps } from "formik";
import FormBodyType1 from "./FormBodyTypes/Type1/FormBodyType1";
import IFormDisplayTypeConfig from "../../Types/FormConfig";
import SignUIButton from "./FormButtonTypes/SignUIButton/SignUIButton";
import NextButton from "./FormButtonTypes/NextButton/NextButton";
import ShopDetails from "./FormBodyTypes/ShopDetails/ShopDetails";

interface IFormContext {
  headerText?: {
    text: string;
    isAnimationRequired?: boolean;
    boldWords?: Array<string>;
  };
  formConfig: Array<IFormDisplayTypeConfig>;
  formik: FormikProps<any>;
  addNewShopDetails: (shopNumber: number) => void;
  options?: Record<string, any>;
  callingAPIForOptions : (url : string , body?:any) => Promise<any>;
  isAnimationRequired?: boolean;
}

const FormContext = createContext<IFormContext | undefined>(undefined);

export const useGetFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

interface FromComponentProps extends React.FC<IForm & { children: ReactNode }> {
  HeaderText: React.FC;
  FormType1: React.FC;
  SignUIButton: React.FC;
  NextUIButton: React.FC;
  FormShopDetails: React.FC;
}

const FormUI: FromComponentProps = ({
  children,
  headerText,
  formConfig,
  isSpecialTypeForm,
  specialTypeName,
  options,
  isAnimationRequired,
  submitHandler
}) => {
  const { validationSchema, initialValues, addNewShopDetails , callingAPIForOptions } = useFormAction(
    formConfig,
    isSpecialTypeForm,
    specialTypeName,
  );

  const handleSubmit = (values: Record<string, any>) => {
    if (submitHandler) {
      submitHandler(values);
    } else {
      console.log("Form Submitted with values:", values);
    }
  };

  return (
    <div className="w-full">
      {initialValues && Object.keys(initialValues).length > 0 && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <FormContext.Provider
              value={{
                headerText,
                formConfig,
                formik,
                addNewShopDetails,
                options,
                callingAPIForOptions,
                isAnimationRequired
              }}
            >
              <form onSubmit={formik.handleSubmit}>{children}</form>
            </FormContext.Provider>
          )}
        </Formik>
      )}
    </div>
  );
};

FormUI.HeaderText = HeaderText;
FormUI.FormType1 = FormBodyType1;
FormUI.SignUIButton = SignUIButton;
FormUI.NextUIButton = NextButton;
FormUI.FormShopDetails = ShopDetails;

export default FormUI;
