import React from "react";
import ISignUp from "./ISignUp";
import FormUI from "../../UIComponent/Form/FormUI";
import SignUpConfig from "../../Config/FormConfigs/SignUpConfig";

const SignUp: React.FC<ISignUp> = () => {
  return (
    <div>
      <FormUI
        headerText={{
          text: SignUpConfig.headerText,
          isAnimationRequired: true,
          boldWords: ["Welcome,"],
        }}
        formConfig={SignUpConfig.formConfig}
      >
        <FormUI.HeaderText />
        <FormUI.FormType1 />
        <FormUI.SignUIButton />
      </FormUI>
    </div>
  );
};

export default SignUp;
