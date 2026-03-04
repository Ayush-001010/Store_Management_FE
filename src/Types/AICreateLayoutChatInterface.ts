export interface AICreateLayoutChatInterface {
    content : string;
    type : "Welcome" | "Response" | "Layout" | "Title" | "Header" |  "Title-Layout";
    isLoading : boolean;
    boldWords : Array<string>;
    isUser : boolean;
    noOfText? : number;
} 

export interface SectionDetailsConfigInterface {
    title : string;
    description : string;
    helpText : string;
}