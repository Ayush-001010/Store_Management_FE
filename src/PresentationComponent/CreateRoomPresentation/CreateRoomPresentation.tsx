import React from "react";
import ICreateRoomPresentation from "./ICreateRoomPresentation";
import ChatConfig from "../../Config/ChatConfig";
import { Button, Input } from "antd";
import SuggestedUserDetails from "./SuggestedUserDetails/SuggestedUserDetails";
import SelectedUser from "./SelectedUser/SelectedUser";

const CreateRoomPresentation: React.FC<ICreateRoomPresentation> = ({
  textFieldName,
  handleChatTypeSelection,
  activeChatType,
  suggestedUsers,
  userName,
  userNameChangeHandler,
  selectedUsers,
  removeUser,
  addSelectedUser,
  onClose,
  customNickName,
  customNickNameChangeHandler,
  createChatRoomHandler,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex flex-col gap-3 mb-8 text-center">
        <p className="text-5xl md:text-6xl text-shadow-xl font-bold text-[#023e8a] leading-tight">
          {ChatConfig.createChatRoomTitle}
        </p>
        <p className="text-lg font-normal text-[#5c677d] max-w-md mx-auto">
          {ChatConfig.createChatRoomDescription}
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#5c677d] mb-3 uppercase tracking-wide">
          Chat Type
        </label>
        <div className="flex gap-4">
          <Button
            onClick={() => handleChatTypeSelection("oneToOne")}
            className="flex-1 py-3 font-semibold text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            style={{
              backgroundColor:
                activeChatType === "oneToOne" ? "#023e8a" : "#5c677d",
              borderColor:
                activeChatType === "oneToOne" ? "#023e8a" : "#5c677d",
              ...(activeChatType === "oneToOne" && {
                boxShadow: "0 0 0 2px #fff, 0 0 0 4px #023e8a",
              }),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#023e8a";
              e.currentTarget.style.borderColor = "#023e8a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                activeChatType === "oneToOne" ? "#023e8a" : "#5c677d";
              e.currentTarget.style.borderColor =
                activeChatType === "oneToOne" ? "#023e8a" : "#5c677d";
            }}
          >
            <i className="bi bi-person mr-2"></i>
            One to One
          </Button>

          <Button
            onClick={() => handleChatTypeSelection("group")}
            className="flex-1 py-3 font-semibold text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            style={{
              backgroundColor:
                activeChatType === "group" ? "#023e8a" : "#5c677d",
              borderColor: activeChatType === "group" ? "#023e8a" : "#5c677d",
              ...(activeChatType === "group" && {
                boxShadow: "0 0 0 2px #fff, 0 0 0 4px #023e8a",
              }),
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#023e8a";
              e.currentTarget.style.borderColor = "#023e8a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                activeChatType === "group" ? "#023e8a" : "#5c677d";
              e.currentTarget.style.borderColor =
                activeChatType === "group" ? "#023e8a" : "#5c677d";
            }}
          >
            <i className="bi bi-people mr-2"></i>
            Group
          </Button>
        </div>
      </div>

      {activeChatType !== "" && (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-[#5c677d] mb-3 uppercase tracking-wide">
            {textFieldName}
          </label>
          <Input
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#023e8a] focus:ring-2 focus:ring-[#023e8a] focus:ring-opacity-20 transition-all outline-none text-[#03045e] font-medium placeholder:text-gray-400"
            placeholder="e.g., Store Managers Team"
            onChange={customNickNameChangeHandler}
            value={customNickName}
          />
        </div>
      )}

      <div className="mb-6">
        <label className="block text-sm font-semibold text-[#5c677d] mb-3 uppercase tracking-wide">
          Add Participants
        </label>

        {/* Search Input */}
        <div className="relative">
          <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none z-10"></i>
          <input
            value={userName}
            onChange={userNameChangeHandler}
            disabled={activeChatType === ""}
            type="text"
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#023e8a] focus:ring-2 focus:ring-[#023e8a] focus:ring-opacity-20 transition-all outline-none text-[#03045e] font-medium placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Search by name, email, or store..."
          />

          {/* Suggested Users Dropdown */}
          {userName && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-72 overflow-y-auto z-20 animate-slideDown">
              {suggestedUsers.length > 0 ? (
                <div className="py-2">
                  {suggestedUsers.map((user) => (
                    <SuggestedUserDetails
                      addSelectedUser={addSelectedUser}
                      key={user.id}
                      imageKey={user.image}
                      name={user.name}
                      id={user.id}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <i className="bi bi-search text-3xl mb-2 block text-gray-300"></i>
                  <p className="text-sm font-medium">No users found</p>
                  <p className="text-xs mt-1">Try a different search term</p>
                </div>
              )}
            </div>
          )}
        </div>

        {selectedUsers.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {selectedUsers.map((user) => (
              <SelectedUser removeUser={removeUser} user={user} />
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
        <Button
          onClick={onClose}
          className="flex-1 py-3 px-6 !bg-gray-200 !text-gray-700 font-semibold rounded-lg 
               hover:!bg-gray-300 !border-gray-200 hover:!border-gray-300
               transition-all duration-200 !shadow-none"
        >
          Cancel
        </Button>

        <Button
          onClick={createChatRoomHandler}
          className="flex-1 py-3 px-6 !bg-[#023e8a] !text-white font-semibold rounded-lg 
               hover:!bg-[#03045e] !border-[#023e8a] hover:!border-[#03045e]
               !shadow-lg hover:!shadow-xl 
               transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <i className="bi bi-chat-dots mr-2"></i>
          Create Chat
        </Button>
      </div>
    </div>
  );
};

export default CreateRoomPresentation;
