import React from "react";
import ISignUpPresentation from "./ISignUpPresentation";
import TextLinkCard from "../../Cards/TextLinkCard/TextLinkCard";

const SignUpPresentation: React.FC<ISignUpPresentation> = () => {
  return (
    <div className="flex w-1/2 justify-end items-center">
      <TextLinkCard navLink="/signIn">Sign In</TextLinkCard>
      <p className="m-1 text-[#adb5bd]">or</p>
      <TextLinkCard navLink="/signUp">Sign Up</TextLinkCard>
    </div>
  );
};

export default SignUpPresentation;
