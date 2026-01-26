import React from "react";
import ISignInButton from "./ISignInButton";
import { Button } from "antd";

const SignInButton: React.FC<ISignInButton> = ({ text }) => {
  return <Button htmlType="submit">{text}</Button>;
};

export default SignInButton;
