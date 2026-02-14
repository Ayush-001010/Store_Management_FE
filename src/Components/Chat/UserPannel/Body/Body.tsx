import React, { useEffect, useState } from "react";
import useChatMessageAction from "../../../../Services/Hooks/useChatMessageAction";
import { ChatRoomInterface } from "../../../../Types/ChatInterface";
import { message } from "antd";
import UserDetailsCard from "./UserDetailsCard/UserDetailsCard";
import { useSelector } from "react-redux";

const Body : React.FC = () => {
    const {getChatRoomDetails} = useChatMessageAction();
    const [userDetails , setUserDetails] = useState<Array<ChatRoomInterface>>([]);
    const [pageNo , setPageNo] = useState<number>(1);
    const [messageAPI, contextHandler] = message.useMessage();
    const { ID }= useSelector((state : any) => state.userDetails);

    useEffect(()=>{
        getChatRoomDetails(pageNo).then((res) => {
            if(res.success){
                const {data} = res;
                const arr : Array<ChatRoomInterface> = [];
                for(const details of data){
                    arr.push({
                        chatRoomID : details.chatRoomID,
                        roomName : details.chatRoomDetails.roomName,
                        customNickname : details.customNickname,
                        lastMessage : details.chatRoomDetails.lastMessageText,
                        chatRoomImage: details.chatRoomDetails.chatRoomImage,
                        lastMessageTime : details.chatRoomDetails.lastMessageTime,
                        isPinned : details.isPinned,
                        roomType : details.chatRoomDetails.roomType
                    });
                };
                if(data.length > 0){
                    setPageNo((prev) => prev + 1);
                    setUserDetails((prev) => [...arr]);
                }
            } else {
                messageAPI.error("Error Fetching Chat Rooms");
            }
        });
    },[ID]);

    return (
        <div>
            {contextHandler}
            {userDetails.map((details) => <UserDetailsCard key={details.chatRoomID} data={details}/>)}
        </div>
    )
};
export default Body;