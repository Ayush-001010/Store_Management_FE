import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import { ChatRoomInterface } from "../../Types/ChatInterface";
import { notification } from 'antd';

const useSendChatMessageAction = () => {
  const socketRef = useRef<Socket | null>(null);
  const { ID, userEmail , userName } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );

  const sendMessage = (message: string, sendDetails: ChatRoomInterface) => {
    console.log("Sending message:", message, "to chat room:", sendDetails);
    if (socketRef.current) {
      socketRef.current.emit("send-message" , {
        chatRoomID : sendDetails.chatRoomID,
        message,
        senderName : userName,
        userID : ID
      })
    }
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:8000");

    socketRef.current.on("connect", () => {
      socketRef.current?.emit("register", { userId: ID, userEmail: userEmail });
    });

    socketRef.current.on("receive-message" , (data) => {
      const {chatRoomID , message , senderName} = data;
      notification.info({
        title: `New message from ${senderName}`,
      })
    });

    socketRef.current.on("disconnect", () => {
      // console.log("Disconnected from chat server");
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, [ID]);

  return { sendMessage };
};

export default useSendChatMessageAction;
