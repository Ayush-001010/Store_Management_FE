import React, { useMemo, useState } from "react";
import IUserDetailsCard from "./IUserDetailsCard";
import ImagePresentation from "../../../../../PresentationComponent/ImagePresentation/ImagePresentation";
import { useGetChatContext } from "../../../Chat";

const UserDetailsCard : React.FC<IUserDetailsCard> = ({data }) => {
    const {chatRoomImage , roomName , customNickname} = data;
    const { chatRoomSelectHandler , recivedNewMessage } = useGetChatContext();
    const [active , setActive] = useState(false);

    const clickHandler = () => {
        chatRoomSelectHandler(data);
        setActive(true);
    }
    const cssStyle = useMemo(() => {
        if(active){
            return "flex justify-between items-center w-full p-2 cursor-pointer rounded-lg bg-gray-100";
        } else {
            return "flex justify-between items-center w-full p-2 cursor-pointer rounded-lg hover:bg-gray-100";
        }
    },[active]);

    const newMessageCount = useMemo(() => {
        const messageData = recivedNewMessage.find((entry) => entry.chatRoomID === data.chatRoomID);
        return messageData ? messageData.noOfNewMessages : 0;
    }, [recivedNewMessage , data.chatRoomID]);

    return (
        <div onClick={clickHandler} className={cssStyle}>
            <div className="flex justify-start w-[110px]">
                <ImagePresentation imageKey={chatRoomImage} divCss="flex justify-center items-center my-1" imgCss="w-12 h-12 rounded-full object-cover shadow-xs"/>
            </div>
            <div className="flex  justify-start items-center w-full ml-2 ">
                <p className="text-lg text-[#495057] font-medium text-shadow-sm">{customNickname ? customNickname : roomName}</p>
                {newMessageCount > 0 && <p className=" flex shadow-sm justify-center items-center text-[#76520e] font-medium text-xs ml-9 bg-[#fff2b2] p-2 rounded-full mb-0 w-8 h-8">{newMessageCount}</p>}
            </div>
        </div>
    )
};

export default React.memo(UserDetailsCard);