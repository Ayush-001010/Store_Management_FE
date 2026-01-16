import ChatBotResponse from "../../Types/ChatBotResponse";

export default interface IHomePresentation {
  title: string;
  description: string;
  chatInputText: string;
  onChangeChatInputText: (event: any) => void;
  onSubmitChatInputTextHandler: (
    event: React.FormEvent<HTMLFormElement>
  ) => void;
  isChatActive: boolean;
  chatMessageData : Array<ChatBotResponse>;
}
