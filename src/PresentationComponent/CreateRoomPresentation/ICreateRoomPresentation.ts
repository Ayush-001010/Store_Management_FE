export default interface ICreateRoomPresentation {
    textFieldName : string;
    activeChatType : "oneToOne" | "group" | "";
    handleChatTypeSelection: (type : "oneToOne" | "group") => void;
    userName : string;
    userNameChangeHandler : (e : React.ChangeEvent<HTMLInputElement>) => void;
    suggestedUsers : Array<any>;
    selectedUsers: Array<any>;
    removeUser: (userId: string) => void;
    addSelectedUser: (user: any) => void;
    onClose: ()=>void;
    customNickNameChangeHandler : (e : React.ChangeEvent<HTMLInputElement>) => void;
    customNickName : string;
    createChatRoomHandler : () => void;
    userInputChangeHandler : (e :any ) => void;
    userInputText : string;
    askAIHandler : () => void;
    aiResponse : Array<{userEmail : string , userProfileImage : string , userName : string , location : string}>;
}