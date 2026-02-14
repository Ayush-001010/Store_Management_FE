import React from "react";
import IHeaderBox from "./IHeaderBox";
import { useGetChatContext } from "../../Chat";
import ImagePresentation from "../../../../PresentationComponent/ImagePresentation/ImagePresentation";

const HeaderBox : React.FC<IHeaderBox> = () => {
    const {selectedChatRoom} = useGetChatContext();
    return (
        <div className="bg-[#e9ecef] h-[60px] shadow-md flex items-center px-4 ">
            <div className="flex items-center w-1/2">
                <ImagePresentation divCss="flex justify-center items-center my-1" imgCss="w-12 h-12 rounded-full object-cover shadow-xs" imageKey={selectedChatRoom?.chatRoomImage || ""} />
                <p className="text-lg ml-2 font-medium text-[#212529] text-shadow-sm">{selectedChatRoom?.roomName}</p>
            </div>
            <div className="flex w-1/2 justify-end items-center">
                <p className="text-lg font-semibold text-shadow-sm cursor-pointer hover:bg-[#e9f5db] p-2 hover:shadow-lg rounded-lg hover:text-[#718355] text-[#595959]">Details</p>
            </div>
        </div>
    )
};

export default HeaderBox;