import React from "react";
import IMessageAIBox from "./IMessageAIBox";
import WelcomeText from "./WelcomeText/WelcomeText";
import UserResponse from "./UserResponse/UserResponse";
import Layout from "./Layout/Layout";
import TitleLayout from "./TitleLayout/TitleLayout";

const MessageAIBox: React.FC<IMessageAIBox> = ({ chats , applySendHandler }) => {
    console.log("Chats  " ,chats);

  return (
    <div className="bg-[#f5f3f4] shadow-md m-4 p-4 rounded-lg h-[500px] overflow-y-auto">
      {chats.map((chat, index) => {
        const { type, isLoading, isUser } = chat;
        if (!isUser && isLoading) {
          return (
            <div className="flex justify-end">
              <p className="animate-bounce text-sm text-[#6c757d] font-semibold">
                Genrating Response
              </p>
            </div>
          );
        }
        switch (type) {
            case "Welcome": return <WelcomeText key={index} chat={chat} applySendHandler={applySendHandler} />;
            case "Response": return <UserResponse key={index} chat={chat} />;
            case "Layout" : return <Layout key={index} chat={chat} applySendHandler={applySendHandler} />;
            case "Title" : return <TitleLayout key={index} chat={chat} applySendHandler={applySendHandler} />;
          default: {
            return <></>;
          }
        }
      })}
    </div>
  );
};

export default MessageAIBox;
