import React from "react";
import INextButtonUI from "./INextButtonUI";
import { Button } from "antd";

const NextButtonUI: React.FC<INextButtonUI> = ({ text }) => {
  return (
    <div className="w-full m-5">
      <Button htmlType="submit" className="w-full bg-[#e9ecef] text-[#212529]  hover:bg-[#212529] hover:text-[#e9ecef] border-0 rounded-md py-3">
        <p className="m-0 font-medium">{text}</p>
      </Button>
    </div>
  );
};

export default NextButtonUI;
