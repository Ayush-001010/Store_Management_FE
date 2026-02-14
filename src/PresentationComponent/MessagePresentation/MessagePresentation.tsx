import React, { memo, useMemo } from "react";
import IMessagePresentation from "./IMessagePresentation";
import { useSelector } from "react-redux";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import moment from "moment";

const MessagePresentation: React.FC<IMessagePresentation> = ({ data }) => {
  
  const { userName } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  const { senderName, createdAt, messageText } = data;
  const messageTime = useMemo(() => {
    const date = new Date(createdAt);
    return moment(date).format("hh:mm A");
  }, []);
  const isOwnMessage = senderName === userName;
  const itNewMessage = useMemo(() => {
    const now = Date.now();
    return now - createdAt < 5000;
  }, [createdAt]);

  return (
    <div className={`flex  ${isOwnMessage ? "justify-end" : "justify-start"} m-3`} >
      <div className={`p-2 rounded-lg shadow-sm ${
          isOwnMessage
            ? "bg-[#adb5bd] text-[#212529] rounded-br-none"
            : "bg-[#e9ecef] text-[#212529]rounded-bl-none"
        }`}
        >
        <p className={`text-xs opacity-75 mb-1 ${itNewMessage ? "animate-fadeIn" : ""}`}>
          {isOwnMessage ? "You" : senderName} • {messageTime}
        </p>
        <p className={`text-sm break-words font-medium ${itNewMessage ? "animate-fadeIn" : ""}`}>{messageText}</p>
      </div>
    </div>
  );
};

export default memo(MessagePresentation);
