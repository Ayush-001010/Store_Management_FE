import React from "react";
import ISignUIButton from "./ISignUIButton";
import { Button } from "antd";

const SignUIButton: React.FC<ISignUIButton> = () => {
  return (
    <div>
      <Button>Submit</Button>
      <p>Or</p>
      <Button>Sign In</Button>
      <p>Or</p>
      <Button>Are you want to create a store??</Button>
    </div>
  );
};

export default SignUIButton;
