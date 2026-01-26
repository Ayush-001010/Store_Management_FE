import CommonConfig from "../../Config/CommonConfig";
import APIServices from "../API_Call/APIServices";

const useChatBotAction = () => {
  const sendMessageToChatBot = async (message: string) => {
    try {
      const url: string = CommonConfig.ai_api_url + "?user_input=" + message;
      const response = await APIServices.postAPIRequest(url);
      console.log("Chatbot response:", response);
      return response;
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
    }
  };

  return { sendMessageToChatBot };
};

export default useChatBotAction;
