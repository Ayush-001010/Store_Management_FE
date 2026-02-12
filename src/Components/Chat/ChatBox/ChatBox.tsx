import React, { useEffect, useState } from "react";
import IChatBox from "./IChatBox";
import { useGetChatContext } from "../Chat";
import EmptyChatBoxPresentation from "../../../PresentationComponent/EmptyChatBoxPresentation/EmptyChatBoxPresentation";
import InputBox from "./InputBox/InputBox";
import useChatMessageAction from "../../../Services/Hooks/useChatMessageAction";
import ZeroMessagePresentation from "../../../PresentationComponent/ZeroMessagePresentation/ZeroMessagePresentation";

const ChatBox: React.FC<IChatBox> = () => {
    const { selectedChatRoom  , sendMessage} = useGetChatContext();
    const { getChatMessages } = useChatMessageAction();
    const [isEmpty, setIsEmpty] = useState(true);

    const sendMessageHandler = (message: string) => {
        if(selectedChatRoom){
            sendMessage(message, selectedChatRoom);
        }
    }
    useEffect(() => {
        getChatMessages(selectedChatRoom?.chatRoomID || "").then((response) => {
            if(response.success && response.data.length === 0) {
                setIsEmpty(true);
            };
        });
    },[selectedChatRoom]);

    return (
        <div className="h-full w-full">
            {!selectedChatRoom && <EmptyChatBoxPresentation />}
            {selectedChatRoom && (
                <div className="relative bg-[#f8f9fa] w-[1085px] h-[800px] rounded-lg overflow-hidden">
                    {isEmpty && <ZeroMessagePresentation />}
                    <InputBox sendMessage={sendMessageHandler}/>
                </div>
            )}
        </div>
    );
};

export default ChatBox;