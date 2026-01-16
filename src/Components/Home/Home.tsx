import React, { useState } from "react";
import IHome from "./IHome";
import CommonConfig from "../../Config/CommonConfig";
import HomePresentation from "../../PresentationComponent/HomePresentation/HomePresentation";
import useChatBotAction from "../../Services/Hooks/useChatBotAction";
import ChatBotResponse from "../../Types/ChatBotResponse";

const Home: React.FC<IHome> = () => {
  const [chatInputText, setChatInputText] = useState<string>("");
  const { sendMessageToChatBot } = useChatBotAction();
  const [isChatActive, setIsChatActive] = useState<boolean>(false);
  const [chatMessageData, setChatMessageData] = useState<Array<ChatBotResponse>>([]);

  const onChangeChatInputTextHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChatInputText(event.target.value);
  };

  const onSubmitChatInputTextHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setChatMessageData((prevMessages: Array<ChatBotResponse>) => [
      ...prevMessages,
      { response: chatInputText, role: "user" },
    ]);
    const response = await sendMessageToChatBot(chatInputText);
    if (response?.success) {
      if (!isChatActive) setIsChatActive(true);
      setChatMessageData((prevMessages: Array<ChatBotResponse>) => [
        ...prevMessages,
        { response: response.data , role: "assistant" },
      ]);
      setChatInputText("");
    }
  };

  return (
    <div>
      <HomePresentation
        title={CommonConfig.prj_title}
        description={CommonConfig.prj_desription}
        chatInputText={chatInputText}
        onChangeChatInputText={onChangeChatInputTextHandler}
        onSubmitChatInputTextHandler={onSubmitChatInputTextHandler}
        isChatActive={isChatActive}
        chatMessageData={chatMessageData}
      />
    </div>
  );
};

export default Home;
