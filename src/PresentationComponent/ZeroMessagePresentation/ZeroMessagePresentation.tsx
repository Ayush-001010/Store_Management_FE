import React from "react";
import IZeroMessagePresentation from "./IZeroMessagePresentation";
import ChatConfig from "../../Config/ChatConfig";

const ZeroMessagePresentation : React.FC<IZeroMessagePresentation> = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <p className="text-8xl text-shadow-lg">{ChatConfig.zeroMessageText1}</p>
            <p className="text-4xl mt-2 text-[#495057] font-bold text-shadow-lg">{ChatConfig.zeroMessageText2}</p>
            <p className="text-xl mt-1 text-[#6c757d] font-medium text-shadow-sm">{ChatConfig.zeroMessageText3}</p>
        </div>
    );
};

export default ZeroMessagePresentation;