import { useCallback, useEffect, useState } from "react";
import * as yup from "yup";
import IFormDisplayTypeConfig from "../../Types/FormConfig";
import APIServices from "../API_Call/APIServices";

const useFormAction = (
  config: Array<IFormDisplayTypeConfig>,
  isSpecialTypeForm?: boolean,
  specialTypeName?: "create-store"
) => {
  const [validationSchema, setValidationSchema] =
    useState<yup.ObjectSchema<any> | null>(null);
  const [initialValues, setInitialValues] = useState<Record<string, any> | null>(null);

  const makeValidationSchemaAndInitialValue = useCallback(
    (
      formConfig: Array<IFormDisplayTypeConfig>,
      isSpecialTypeForm?: boolean,
      specialTypeName?: "create-store"
    ) => {
      const schemaFields: Record<
        string,
        yup.StringSchema | yup.BooleanSchema
      > = {};
      const initialValues: Record<string, any> = {};
      if (!isSpecialTypeForm) {
        formConfig.forEach((formDisplayConfig: IFormDisplayTypeConfig) => {
          formDisplayConfig.fields.forEach((field) => {
            initialValues[field.backendName] = "";
            if (field.validation) {
              schemaFields[field.backendName] = field.validation;
            }
          });
        });
      } else {
        switch(specialTypeName){
          case "create-store" : {
            formConfig.forEach((formDisplayConfig: IFormDisplayTypeConfig) => {
              formDisplayConfig.fields.forEach((field , index) => {
                initialValues[`${field.backendName}_1`] = "";
                if (field.validation) {
                  schemaFields[`${field.backendName}_1`] = field.validation;
                }
              });
          })};
        }
      }
      return {
        validationSchema: yup.object().shape(schemaFields),
        initialValues,
      };
    },
    []
  );

  const addNewShopDetails = useCallback((shopNumber : number)=>{
    const updatedInitialValues = { ...initialValues };
    const updatedSchemaFields: Record<
      string,
      yup.StringSchema | yup.BooleanSchema
    > = {};

    config.forEach((formDisplayConfig: IFormDisplayTypeConfig) => {
      formDisplayConfig.fields.forEach((field) => {
        updatedInitialValues[`${field.backendName}_${shopNumber}`] = "";
        if (field.validation) {
          updatedSchemaFields[`${field.backendName}_${shopNumber}`] = field.validation;
        }
      });
    });

    setInitialValues({...updatedInitialValues});

    if (validationSchema) {
      const newValidationSchema = validationSchema.concat(
        yup.object().shape(updatedSchemaFields)
      );
      setValidationSchema(newValidationSchema);
    }
  },[validationSchema , initialValues , setValidationSchema , setInitialValues , config]);

  const callingAPIForOptions = useCallback(async (url : string , body?:any) => {
    const response = APIServices.postAPIRequest(url , body);
    return response;
  },[]);

  useEffect(() => {
    if (config && config.length > 0) {
      const { validationSchema, initialValues } =
        makeValidationSchemaAndInitialValue(
          config,
          isSpecialTypeForm,
          specialTypeName
        );
      setInitialValues(initialValues);
      setValidationSchema(validationSchema);
    }
  }, [config]);

  return { validationSchema, initialValues , addNewShopDetails , callingAPIForOptions };
};

export default useFormAction;
