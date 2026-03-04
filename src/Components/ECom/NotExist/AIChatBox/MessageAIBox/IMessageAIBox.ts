import { AICreateLayoutChatInterface } from "../../../../../Types/AICreateLayoutChatInterface";

export default interface IMessageAIBox {
    chats : Array<AICreateLayoutChatInterface>;  
    applySendHandler : (value : string ,  type : "Layout" | "Header" | "Title" | "Title-Layout") => void; 
}