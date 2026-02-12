import React, { createContext, useContext, useState } from "react";
import IChat from "./IChat";
import UserPannel from "./UserPannel/UserPannel";
import { ChatRoomInterface } from "../../Types/ChatInterface";
import ChatBox from "./ChatBox/ChatBox";
import useSendChatMessageAction from "../../Services/Hooks/useSendChatMessageAction";

interface IChatContext {
  chatRoomSelectHandler: (chatRoomDetails: ChatRoomInterface) => void;
  selectedChatRoom: ChatRoomInterface | undefined;
  sendMessage : (message : string , sendDetails : ChatRoomInterface) => void;
}
const ChatContext = createContext<undefined | IChatContext>(undefined);

export const useGetChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error(
      "useGetChatContext must be used within a ChatContextProvider"
    );
  }
  return context;
};

const Chat: React.FC<IChat> = () => {
  const [selectedChatRoom, setSelectedChatRoom] = useState<undefined | ChatRoomInterface>(undefined);
  const {sendMessage} = useSendChatMessageAction();

  const chatRoomSelectHandler = (chatRoomDetails: ChatRoomInterface) => {
    setSelectedChatRoom(chatRoomDetails);
  };

  return (
    <ChatContext.Provider value={{ chatRoomSelectHandler, selectedChatRoom , sendMessage }}>
      <div className="flex w-screen h-full">
        <div className="w-[310px]">
        <UserPannel />
        </div>
        <div className="w-full">
        <ChatBox />
        </div>
      </div>
    </ChatContext.Provider>
  );
};

export default Chat;
