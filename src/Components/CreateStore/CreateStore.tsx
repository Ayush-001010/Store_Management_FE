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

  const submitHandler = (formData: Record<string, any>) => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-row ">
      <div className="w-sm">
        <VerticalStepFlowBar
          flowBarConfig={CreateStoreConfig.stepBarConfig}
          activeStep={activeStep}
        />
      </div>
      <div className="w-full">
        {activeStep === 0 && (
          <div className="w-1/2 flex justify-center items-center h-full">
            <FormUI
              formConfig={CreateStoreFormConfig.signUpFormConfig}
              isAnimationRequired={true}
              submitHandler={submitHandler}
            >
              <FormUI.FormType1 />
              <FormUI.NextUIButton />
            </FormUI>
          </div>
        )}
        {activeStep === 1 && (
          <>
            <FormUI
              formConfig={CreateStoreFormConfig.createStoreFormConfig}
              isSpecialTypeForm={true}
              specialTypeName="create-store"
              options={options}
              isAnimationRequired={true}
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
