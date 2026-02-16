import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io, Socket } from "socket.io-client";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import { ChatRoomInterface, RecivedNewMessageInterface, SomeOneTypingInterface } from "../../Types/ChatInterface";
import { notification } from 'antd';
import APIServices from "../API_Call/APIServices";
import CommonConfig from "../../Config/CommonConfig";

const useSendChatMessageAction = () => {
  const socketRef = useRef<Socket | null>(null);
  const { ID, userEmail , userName } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  const [recivedNewMessage, setRecivedNewMessage] = useState<Array<RecivedNewMessageInterface>>([]);
  const [someOneTyping , setSomeOneTyping] = useState<Array<SomeOneTypingInterface> | null>(null);

  const sendMessage = async (message: string , file : File | null, sendDetails: ChatRoomInterface) => {
    let fileURL : null | string = null;
    if(file){
        console.log("Sending message:", message, "to chat room:", sendDetails , file);
        const response = await APIServices.postAPIRequest("/common/uploadFile", {
          fileName : file?.name ,
          fileType : file?.type
        });
        console.log("File upload response:", response);
        console.log("File details:", file);
        if(response.success){
          const fileUploadResponse = await APIServices.uploadFileToS3(file , file.type , response.data);
          console.log("File upload to S3 response:", fileUploadResponse);
          if(fileUploadResponse.success){
            fileURL = file.name;
          }
        }
    }
    if (socketRef.current) {
      socketRef.current.emit("send-message" , {
        chatRoomID : sendDetails.chatRoomID,
        message,
        senderName : userName,
        userID : ID,
        fileURL,
        fileType : fileURL ? CommonConfig.imageMimeTypes.includes(file?.type || "") ? "Image" : "Other" : null
      });
    }
  };
  const typingStart = (chatRoomID: string) => {
    if (socketRef.current) {
      socketRef.current.emit("typing-start", { chatRoomID, userName });
    }
  };
  const clearNewMessageCount = (chatRoomID: string) => {
    setRecivedNewMessage((prev) =>
      prev.map((entry) =>
        entry.chatRoomID === chatRoomID ? { ...entry, noOfNewMessages: 0 } : entry
      )
    );
  };
  const stopTyping = (chatRoomID: string) => {
    if (socketRef.current) {
      socketRef.current.emit("typing-stop", { chatRoomID, userName });
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
      });
      setRecivedNewMessage((prev) => {
        const existingEntry = prev.find((entry) => entry.chatRoomID === chatRoomID);
        if (existingEntry) {
          return prev.map((entry) =>
            entry.chatRoomID === chatRoomID
              ? { ...entry, noOfNewMessages: entry.noOfNewMessages + 1 }
              : entry
          );
        } else {
          return [...prev, { chatRoomID, noOfNewMessages: 1 }];
        }
      });
    });

    socketRef.current.on("user-typing" , (data) => {
      const { chatRoomID, userName } = data;
      console.log(`${userName} is typing in chat room ${chatRoomID}`);
      setSomeOneTyping((prev) => {
        if(prev){
          const existingEntry = prev.find((entry) => entry.chatRoomID === chatRoomID && entry.userName === userName);
          if(existingEntry){
            return prev;
          }else{
            return [...prev, {chatRoomID, userName}];
          }
        }else{
          return [{chatRoomID, userName}];
        }
      })
    });

    socketRef.current.on("user-stopped-typing" , (data) => {
      const { chatRoomID, userName:usName } = data;
      console.log(`${usName} stopped typing in chat room ${chatRoomID}`);
      setSomeOneTyping((prev) => {
        if(prev){
          return prev.filter((entry) => !(entry.chatRoomID === chatRoomID && entry.userName === usName));
        }else{
          return null;
        }
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

  return { sendMessage , clearNewMessageCount , recivedNewMessage , typingStart , someOneTyping , stopTyping};
};

export default useSendChatMessageAction;
