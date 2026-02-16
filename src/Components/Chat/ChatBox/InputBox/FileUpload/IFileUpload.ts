export default interface IFileUpload {
   setFile: (file: File) => void; 
   closeHandler: () => void;
}