export interface ChatRoomInterface {
    chatRoomID: string;
    roomName: string;
    customNickname: string;
    lastMessage: string;
    lastMessageTime: number;
    isPinned: boolean;
    roomType:"group" | "one-to-one";
    chatRoomImage: string;
}