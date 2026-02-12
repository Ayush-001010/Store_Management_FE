import React, { useEffect, useState } from "react";
import ICreateChatRoom from "./ICreateChatRoom";
import { message, Modal } from "antd";
import CreateRoomPresentation from "../../../../PresentationComponent/CreateRoomPresentation/CreateRoomPresentation";
import useChatMessageAction from "../../../../Services/Hooks/useChatMessageAction";

const CreateChatRoom: React.FC<ICreateChatRoom> = ({ onClose , open })  => {
    const [activeChatType , setActiveChatType] = useState<"oneToOne" | "group" | "">("");
    const { getUserDetails , createChatRoom } = useChatMessageAction();
    const [userName , setUserName] = useState("");
    const [suggestedUsers , setSuggestedUsers] = useState<Array<any>>([]);
    const [selectedUsers , setSelectedUsers] = useState<Array<any>>([]);
    const [messageAPI , contextHandler ]= message.useMessage();
    const [customNickName , setCustomNickName] = useState("");

    const customNickNameChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCustomNickName(e.target.value);
    }
    const handleChatTypeSelection = (type : "oneToOne" | "group") => {
        setActiveChatType(type);
    }
    const userNameChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        if(selectedUsers.length>0 && activeChatType === "oneToOne"){
            messageAPI.error({content : "You can only select one user for one to one chat"});
            return;
        } else if(selectedUsers.length  === 10 && activeChatType === "group"){
            messageAPI.error({content : "You can only select 10 users for group chat"});
            return;
        }
        setUserName(e.target.value);
    }
    const removeSelectedUser = (userId : string) => {
        const filteredUsers = selectedUsers.filter((user) => user.id !== userId);
        setSelectedUsers(filteredUsers);
    }
    const addSelectedUser = (user : any) => {
        if(!selectedUsers.some((u) => u.id === user.id)){
            setSelectedUsers([...selectedUsers , user]);
        }
        setUserName("");
    }
    useEffect(()=>{
        const obj = setTimeout(async ()=>{
            if(userName.trim() === ""){
                setSuggestedUsers([]);
                return;
            }
            const res = await getUserDetails(userName);
            setSuggestedUsers(res);
        },500);
        return () => {
            clearTimeout(obj);
        };
    },[userName]);

    const createChatRoomHandler = async () => {
        if(activeChatType === ""){
            messageAPI.error({content : "Please select a chat type"});
            return;
        } else if(selectedUsers.length === 0){
            messageAPI.error({content : "Please select at least one user"});
            return;
        } else if(activeChatType === "group" && customNickName.trim() === ""){
            messageAPI.error({content : "Please enter a group name"});
            return;
        } else if(activeChatType === "oneToOne" && customNickName.trim() === ""){
            messageAPI.error({content : "Please enter a custom nick name"});
            return;
        }
        const selectedUserIds = selectedUsers.map((user) => user.id);
        const response = await createChatRoom(activeChatType === "oneToOne" ? "one-to-one" : "group" , selectedUserIds , activeChatType === "oneToOne" ? customNickName : "" , activeChatType === "group" ? customNickName : "");
        if(response.success){
            messageAPI.success({content : "Chat room created successfully"});
            onClose();
        } else {
            messageAPI.error({content : "Failed to create chat room"});
        }
    }


    return (
        <div>
            {contextHandler}
            <Modal open={open} onCancel={onClose} footer={null} centered width={600}>
                <CreateRoomPresentation onClose={onClose} addSelectedUser={addSelectedUser} selectedUsers={selectedUsers} 
                    removeUser={removeSelectedUser} suggestedUsers={suggestedUsers} 
                    createChatRoomHandler={createChatRoomHandler}
                    textFieldName={activeChatType  === "group" ? "Group Name" : "Custom Nick Name"} 
                    handleChatTypeSelection={handleChatTypeSelection} activeChatType={activeChatType} 
                    userName={userName} userNameChangeHandler={userNameChangeHandler}
                    customNickNameChangeHandler={customNickNameChangeHandler} customNickName={customNickName}/>
            </Modal>
        </div>
    )
};

export default CreateChatRoom;