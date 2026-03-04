import { AICreateLayoutChatInterface } from "../../../../../../Types/AICreateLayoutChatInterface";

export default interface ITitleLayout {
    chat : AICreateLayoutChatInterface;
    applySendHandler : (value : string ,  type : "Layout" | "Header" | "Title" | "Title-Layout") => void;
}