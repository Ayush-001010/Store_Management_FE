import { AICreateLayoutChatInterface } from "../../../../../../Types/AICreateLayoutChatInterface";

export default interface ILayout {
    chat : AICreateLayoutChatInterface;  
    applySendHandler : (message : string ,  type : "Layout" | "Header" | "Title") => void; 
}