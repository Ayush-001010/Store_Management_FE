import { AICreateLayoutChatInterface } from "../../../../../../Types/AICreateLayoutChatInterface";

export default interface IWelcomeText {
    chat : AICreateLayoutChatInterface;
    applySendHandler : (value : string) => void;
}