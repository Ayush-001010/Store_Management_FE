import React, { createContext, useContext, useState } from "react";
import IChat from "./IChat";
import UserPannel from "./UserPannel/UserPannel";
import { ChatRoomInterface, RecivedNewMessageInterface, SomeOneTypingInterface } from "../../Types/ChatInterface";
import ChatBox from "./ChatBox/ChatBox";
import useSendChatMessageAction from "../../Services/Hooks/useSendChatMessageAction";

interface IChatContext {
  chatRoomSelectHandler: (chatRoomDetails: ChatRoomInterface) => void;
  selectedChatRoom: ChatRoomInterface | undefined;
  sendMessage : (message : string , file : File | null , sendDetails : ChatRoomInterface) => void;
  recivedNewMessage : Array<RecivedNewMessageInterface>;
  typingStart : (chatRoomID : string) => void;
  someOneTyping : Array<SomeOneTypingInterface> | null;
  stopTyping : (chatRoomID: string) => void;
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
  const {sendMessage , recivedNewMessage , clearNewMessageCount , typingStart , someOneTyping , stopTyping} = useSendChatMessageAction();

  const chatRoomSelectHandler = (chatRoomDetails: ChatRoomInterface) => {
    setSelectedChatRoom(chatRoomDetails);
    clearNewMessageCount(chatRoomDetails.chatRoomID);
  };

  return (
    <ChatContext.Provider value={{ chatRoomSelectHandler, selectedChatRoom , sendMessage , recivedNewMessage , typingStart , someOneTyping , stopTyping}}>
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
