export default interface IInputBox {
    sendMessage: (message: string , file : File | null ) => void;
    isFileUploadModalOpenHandler: () => void;
}