import React from "react";
import IEmptyChatBoxPresentation from "./IEmptyChatBoxPresentation";
import ChatConfig from "../../Config/ChatConfig";

const EmptyChatBoxPresentation : React.FC<IEmptyChatBoxPresentation> = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center w-full">
            <p className="text-6xl text-[#595959] text-shadow-lg ">{ChatConfig.emptyChatRoomText1}</p>
            <p className="text-2xl text-[#a5a5a5] text-shadow-lg ">{ChatConfig.emptyChatRoomText2}</p>
            <p></p>
        </div>
    )
};

export default EmptyChatBoxPresentation;