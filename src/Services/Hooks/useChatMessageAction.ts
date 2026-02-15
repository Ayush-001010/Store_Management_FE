import { useCallback } from "react";
import { useSelector } from "react-redux";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import APIServices from "../API_Call/APIServices";

const useChatMessageAction = () => {
    const { OrganizationID , userName , ID } = useSelector((state : any) => state.userDetails as UserDetailsType);

    const getUserDetails = useCallback(async (searchStr : string)=>{
        const response = await APIServices.postAPIRequest("/chat/getUserDetails" , { organizationID : OrganizationID , searchStr });
        if(response.success){
            return response.data;
        } else {
            return [];
        }
    },[OrganizationID]);
    const createChatRoom = useCallback(async (roomType : "one-to-one" | "group" , selectedUsers : Array<any> , nickName ? : string , groupName? : string) => {
        // createdBy
        const response = await APIServices.postAPIRequest("/chat/createChatRoom" ,{ data :{ organizationId : OrganizationID , userID : ID , roomType , members :  selectedUsers , nickName , groupName  , createdBy :  userName}});
        return response;
    },[OrganizationID , userName , ID]);
    const getChatRoomDetails = useCallback(async (pageNo:number) => {
        const response = await APIServices.postAPIRequest("/chat/getChatRooms" , { userID :  ID , pageNo});
        return response;
    },[ID]);
    const getChatMessages = useCallback(async (chatRoomID : string , pageNo : number ) => {
        const response = await APIServices.postAPIRequest("/chat/getChatMessages" , { chatRoomID  , pageNo});
        return response;
    },[]);
    const getCountOfFileType  = useCallback(async (chatRoomID : string , type : "Image" | "Other") => {
        const response = await APIServices.postAPIRequest("/chat/getCountOfFileType" , { chatRoomID , type });
        return response;
    },[]);
    const getFilesAndImages = useCallback(async (chatRoomID : string , type : "Image" | "Other") => {
        const response = await APIServices.postAPIRequest("/chat/getFilesAndImages" , { chatRoomID , type });
        return response;
    },[]);

    return { getUserDetails  , createChatRoom  , getChatRoomDetails , getChatMessages , getCountOfFileType , getFilesAndImages};
};

export default useChatMessageAction;