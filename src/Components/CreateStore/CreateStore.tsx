import React from "react";
import ICreateStore from "./ICreateStore";
import VerticalStepFlowBar from "../../UIComponent/StepFlowBar/VerticalStepFlowBar/VerticalStepFlowBar";
import CreateStoreConfig from "../../Config/CreateStoreConfig";

const CreateStore: React.FC<ICreateStore> = () => {
  return (
    <div>
      <VerticalStepFlowBar flowBarConfig={CreateStoreConfig.stepBarConfig} />
    </div>
  );
};

export default CreateStore;
