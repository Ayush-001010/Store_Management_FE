import React from "react";
import IInputBox from "./IInputBox";
import { Input } from "antd";

const InputBox: React.FC<IInputBox> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2 bg-[#f8f9fa] p-3 rounded-lg shadow-md">
      <Input.TextArea value={value} onChange={onChange} placeholder="Type here...." />
      <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 shadow-lg bg-[#847577] text-[#fbfbf2] font-bold w-10 h-10  flex justify-center items-center p-3 rounded-full">
        <i className="bi bi-paperclip" />
      </button>
      <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 shadow-lg bg-[#0466c8] text-[#fbfbf2] font-bold w-10 h-10  flex justify-center items-center p-3 rounded-full">
        <i className="bi bi-send" />
      </button>
    </div>
  );
};

export default InputBox;
