import React from "react";
import ISignUIButton from "./ISignUIButton";
import { Button } from "antd";
import SignInButton from "../../../../PresentationComponent/FormPresentationComponent/Button/SignInButton";
import TextLinkButton from "../../../../PresentationComponent/FormPresentationComponent/Button/TextLinkButton/TextLinkButton";

const SignUIButton: React.FC<ISignUIButton> = () => {
  return (
    <div>
      <SignInButton text="Sumbit" />
      <p>Or</p>
      <Button>Sign In</Button>
      <p>Or</p>
      <TextLinkButton text="Fancy opening your very own enchanted shop in Diagon Alley? Tap here to conjure your **Create Store** spell! 🪄✨" link="/createStore" />
    </div>
  );
};

export default SignUIButton;
