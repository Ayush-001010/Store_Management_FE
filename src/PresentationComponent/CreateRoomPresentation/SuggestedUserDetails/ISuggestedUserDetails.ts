export default interface ISuggestedUserDetails {
    imageKey: string;
    name: string;
    id: string;
    addSelectedUser:(user : any) => void;
}