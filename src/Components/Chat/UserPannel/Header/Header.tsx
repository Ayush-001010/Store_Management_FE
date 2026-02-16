import CreateChatRoom from "../CreateChat/CreateChatRoom";
import IHeader from "./IHeader";
import React from "react";

const Header: React.FC<IHeader> = () => {
  const [openCreateChatRoomModal, setOpenCreateChatRoomModal] = React.useState(false);

  const closeCreateChatRoomModal = () => {
    setOpenCreateChatRoomModal(false);
  };
  const openCreateChatRoomModalHandler = () => {
    setOpenCreateChatRoomModal(true);
  }

  return (
    <>
      <div className="flex items-center justify-between p-2 ">
        <div>
          <p className="text-md text-[#6c757d] font-semibold">Chats</p>
        </div>
        <div className="flex items-center gap-2">
          <p onClick={openCreateChatRoomModalHandler} className="m-0 flex justify-center items-center bg-[#dee2e6] rounded-lg shadow-sm p-1 cursor-pointer w-8 h-8 cursor-pointer">
            <i className="bi bi-plus font-bold text-lg text-[#588157]" />
          </p>
          <p>
            <i className="bi bi-three-dots-vertical text-[#6c757d]" />
          </p>
        </div>
      </div>
      <CreateChatRoom open={openCreateChatRoomModal} onClose={closeCreateChatRoomModal}/>
    </>
  );
};

export default Header;
