export interface AICreateLayoutChatInterface {
    content : string;
    type : "Welcome" | "Response" | "Layout";
    isLoading : boolean;
    boldWords : Array<string>;
    isUser : boolean;
} 