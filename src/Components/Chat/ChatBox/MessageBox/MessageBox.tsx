import React, { useMemo } from "react";
import IMessageBox from "./IMessageBox";
import MessagePresentation from "../../../../PresentationComponent/MessagePresentation/MessagePresentation";
import moment from "moment";
import { useGetChatContext } from "../../Chat";

const MessageBox: React.FC<IMessageBox> = ({ messages }) => {
  const {someOneTyping , selectedChatRoom} = useGetChatContext();
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);

  console.log("Rendering MessageBox with messages: ", messages.length);

  const someOneTypingName = useMemo(() => {
    if (!someOneTyping || !selectedChatRoom) return null;

    const arr = someOneTyping?.filter((typing) => typing.chatRoomID === selectedChatRoom?.chatRoomID);
    if(arr.length === 0) return null;
    
    return arr[0].userName;
  },[someOneTyping]);
  return (
    <div className="relative">
      {messages.map((message) => {
        const { createdAt, ID } = message;
        const messageDate = new Date(createdAt);
        const isToday =
          messageDate.getDate() === currentDate.getDate() &&
          messageDate.getMonth() === currentDate.getMonth() &&
          messageDate.getFullYear() === currentDate.getFullYear();
        let isShow: boolean = false;

        if (!isToday && messageDate < currentDate) {
          currentDate = messageDate;
          isShow = true;
        }

        return (
          <React.Fragment key={ID}> 
            {isShow && (
              <div className="sticky top-20 mx-auto w-fit bg-[#dee2e6] text-[#495057] px-3 py-1 rounded-md z-10 my-2">
                <span>{isToday ? "Today" : moment(messageDate).format("DD/MM/YYYY")}</span>
              </div>
            )}
            <MessagePresentation data={message} />
          </React.Fragment>
        );
      })}
      {someOneTypingName && (
  <div className="flex items-center gap-2 px-3 py-2 animate-fadeIn">
    <div className="flex gap-1">
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-typing"></div>
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-typing [animation-delay:0.2s]"></div>
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-typing [animation-delay:0.4s]"></div>
    </div>
    <span className="text-sm text-[#212529] italic">
      <span className="font-semibold text-gray-800">{someOneTypingName}</span> is typing...
    </span>
  </div>
)}
    </div>
  );
};

export default React.memo(MessageBox);