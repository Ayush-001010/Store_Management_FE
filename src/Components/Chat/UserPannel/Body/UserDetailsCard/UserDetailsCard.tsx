import React, { useMemo, useState } from "react";
import IUserDetailsCard from "./IUserDetailsCard";
import ImagePresentation from "../../../../../PresentationComponent/ImagePresentation/ImagePresentation";
import { useGetChatContext } from "../../../Chat";

const UserDetailsCard : React.FC<IUserDetailsCard> = ({data }) => {
    const {chatRoomImage , roomName , customNickname} = data;
    const { chatRoomSelectHandler } = useGetChatContext();
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

    return (
        <div onClick={clickHandler} className={cssStyle}>
            <div className="flex justify-start w-[110px]">
                <ImagePresentation imageKey={chatRoomImage} divCss="flex justify-center items-center my-1" imgCss="w-12 h-12 rounded-full object-cover shadow-xs"/>
            </div>
            <div className="flex flex-col justify-start w-full ml-2 ">
                <p className="text-lg text-[#495057] font-medium text-shadow-sm">{customNickname ? customNickname : roomName}</p>
            </div>
        </div>
    )
};

export default UserDetailsCard;