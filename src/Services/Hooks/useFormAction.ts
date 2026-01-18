import { useCallback, useEffect, useState } from "react";
import * as yup from "yup";
import IFormDisplayTypeConfig from "../../Types/FormConfig";

const useFormAction = (config: Array<IFormDisplayTypeConfig>) => {
  const [validationSchema, setValidationSchema] =
    useState<yup.ObjectSchema<any> | null>(null);
  const [initialValues, setInitialValues] = useState<Record<string, any>>({});

  const makeValidationSchemaAndInitialValue = useCallback(
    (formConfig: Array<IFormDisplayTypeConfig>) => {
      const schemaFields: Record<string, yup.StringSchema> = {};
      const initialValues: Record<string, any> = {};
      formConfig.forEach((formDisplayConfig: IFormDisplayTypeConfig) => {
        formDisplayConfig.fields.forEach((field) => {
          initialValues[field.backendName] = "";
          if (field.validation) {
            schemaFields[field.backendName] = field.validation;
          }
        });
      });
      return {
        validationSchema: yup.object().shape(schemaFields),
        initialValues,
      };
    },
    []
  );

  useEffect(() => {
    if (config && config.length > 0) {
      const { validationSchema, initialValues } =
        makeValidationSchemaAndInitialValue(config);
      setInitialValues(initialValues);
      setValidationSchema(validationSchema);
    }
  }, [config]);

  return { validationSchema , initialValues };
};

export default useFormAction;
