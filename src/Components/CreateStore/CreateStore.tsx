import React, { useState } from "react";
import ICreateStore from "./ICreateStore";
import VerticalStepFlowBar from "../../UIComponent/StepFlowBar/VerticalStepFlowBar/VerticalStepFlowBar";
import CreateStoreConfig from "../../Config/CreateStoreConfig";
import FormUI from "../../UIComponent/Form/FormUI";
import useCreateStoreAction from "../../Services/Hooks/useCreateStoreAction";
import CreateStoreFormConfig from "../../Config/FormConfigs/CreateStoreFormConfig";

const CreateStore: React.FC<ICreateStore> = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const { options } = useCreateStoreAction();

  return (
    <div className="flex flex-row ">
      <div className="w-sm">
        <VerticalStepFlowBar flowBarConfig={CreateStoreConfig.stepBarConfig} />
      </div>
      <div className="w-full">
        {activeStep === 0 && (
          <>
            <FormUI formConfig={CreateStoreFormConfig.signUpFormConfig}>
              <FormUI.FormType1 />
              <FormUI.NextUIButton />
            </FormUI>
          </>
        )}
        {activeStep === 1 && (
          <>
            <FormUI
              formConfig={CreateStoreFormConfig.createStoreFormConfig}
              isSpecialTypeForm={true}
              specialTypeName="create-store"
              options={options}
            >
              <FormUI.FormShopDetails />
              <FormUI.NextUIButton />
            </FormUI>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateStore;
