export interface ChatRoomInterface {
  chatRoomID: string;
  roomName: string;
  customNickname: string;
  lastMessage: string;
  lastMessageTime: number;
  isPinned: boolean;
  roomType: "group" | "one-to-one";
  chatRoomImage: string;
}

export interface ChatMessageInterface {
  ID: string;
  chatRoomID: string;
  senderName: string;
  messageText: string;
  messageType: "text" | "image" | "file";
  fileURL?: string;
  createdAt: number;
  updatedAt: number;
  fileType?: "Image" | "Other";
}

export interface RecivedNewMessageInterface {
  chatRoomID: string;
  noOfNewMessages: number;
}

export interface SomeOneTypingInterface {
  chatRoomID: string;
  userName: string;
}