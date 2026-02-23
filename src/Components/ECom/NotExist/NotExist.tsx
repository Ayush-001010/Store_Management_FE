import React, { useMemo, useState } from "react";
import INotExist from "./INotExist";
import { Button } from "antd";
import AIChatBox from "./AIChatBox/AIChatBox";

const NotExist: React.FC<INotExist> = () => {
  const buttonCss =useMemo(() => "!p-2 !bg-[#f2f2f2] !text-[#7f7f7f] hover:!text-[#595959] " +
    "hover:!bg-[#e9ecef] hover:!font-bold hover:!border-transparent " +
    "focus:!border-transparent active:!border-transparent " +
    "!shadow-none hover:!shadow-none focus:!shadow-none active:!shadow-none", []);
    const [openAIChatBox, setOpenAIChatBox] = useState(false);

    const openAIChatBoxHandler = () => setOpenAIChatBox(true);
    const closeAIChatBoxHandler = () => setOpenAIChatBox(false);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <div className="flex justify-center items-center gap-4">
        <Button className={buttonCss}>Use Default Template</Button>
        <p className="text-lg font-semibold text-[#7f7f7f]">OR</p>
        <Button className={buttonCss} onClick={openAIChatBoxHandler}>Build Using AI</Button>
      </div>
      <AIChatBox open={openAIChatBox} onClose={closeAIChatBoxHandler} />
    </div>
  );
};

export default React.memo(NotExist);
