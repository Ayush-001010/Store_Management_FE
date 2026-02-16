import React from "react";
import ICreateRoomPresentation from "./ICreateRoomPresentation";
import ChatConfig from "../../Config/ChatConfig";
import { Button, Input } from "antd";
import SuggestedUserDetails from "./SuggestedUserDetails/SuggestedUserDetails";
import SelectedUser from "./SelectedUser/SelectedUser";
import ImagePresentation from "../ImagePresentation/ImagePresentation";

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
  userInputText,
  userInputChangeHandler,
  askAIHandler,
  aiResponse,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4 max-h-screen overflow-y-auto">
      {/* Header - Compact */}
      <div className="flex flex-col gap-1 mb-4 text-center">
        <p className="text-3xl md:text-4xl text-shadow-lg font-bold text-[#023e8a] leading-tight">
          {ChatConfig.createChatRoomTitle}
        </p>
        <p className="text-sm font-normal text-[#5c677d] max-w-md mx-auto">
          {ChatConfig.createChatRoomDescription}
        </p>
      </div>

      {/* Chat Type - Compact */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-[#5c677d] mb-2 uppercase tracking-wide">
          Chat Type
        </label>
        <div className="flex gap-3">
          <Button
            onClick={() => handleChatTypeSelection("oneToOne")}
            className="flex-1 py-2 font-semibold text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
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
            <i className="bi bi-person mr-1"></i>
            One to One
          </Button>

          <Button
            onClick={() => handleChatTypeSelection("group")}
            className="flex-1 py-2 font-semibold text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
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
            <i className="bi bi-people mr-1"></i>
            Group
          </Button>
        </div>
      </div>

      {/* Chat Name - Compact */}
      {activeChatType !== "" && (
        <div className="mb-4">
          <label className="block text-xs font-semibold text-[#5c677d] mb-2 uppercase tracking-wide">
            {textFieldName}
          </label>
          <Input
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#023e8a] focus:ring-2 focus:ring-[#023e8a] focus:ring-opacity-20 transition-all outline-none text-[#03045e] font-medium placeholder:text-gray-400"
            placeholder="e.g., Store Managers Team"
            onChange={customNickNameChangeHandler}
            value={customNickName}
          />
        </div>
      )}

      {/* Add Participants - Compact */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-[#5c677d] mb-2 uppercase tracking-wide">
          Add Participants
        </label>

        {/* Search Input */}
        <div className="relative">
          <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none z-10"></i>
          <input
            value={userName}
            onChange={userNameChangeHandler}
            disabled={activeChatType === ""}
            type="text"
            className="w-full pl-10 pr-3 py-2 border-2 border-gray-300 rounded-lg focus:border-[#023e8a] focus:ring-2 focus:ring-[#023e8a] focus:ring-opacity-20 transition-all outline-none text-sm text-[#03045e] font-medium placeholder:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Search by name, email..."
          />

          {/* Suggested Users Dropdown */}
          {userName && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto z-20 animate-slideDown">
              {suggestedUsers.length > 0 ? (
                <div className="py-1">
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
                <div className="p-4 text-center text-gray-500">
                  <i className="bi bi-search text-2xl mb-1 block text-gray-300"></i>
                  <p className="text-xs font-medium">No users found</p>
                </div>
              )}
            </div>
          )}
        </div>

        {selectedUsers.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedUsers.map((user) => (
              <SelectedUser removeUser={removeUser} user={user} key={user.id} />
            ))}
          </div>
        )}
      </div>

      {/* AI Search - Compact */}
      {activeChatType === "group" && (
        <>
          {/* Divider - Enhanced */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 py-1 text-xs font-semibold text-gray-600 uppercase tracking-wider rounded-full border border-gray-200 shadow-sm">
                Or Try AI Search
              </span>
            </div>
          </div>

          {/* AI Search Section - Enhanced */}
          <div className="mb-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border-2 border-blue-100 rounded-xl p-4">
            {/* Header with Icon */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-gradient-to-br from-[#023e8a] to-[#0077b6] rounded-lg flex items-center justify-center shadow-sm">
                <i className="bi bi-stars text-white text-xs"></i>
              </div>
              <label className="text-xs font-bold text-[#023e8a] uppercase tracking-wide">
                AI-Powered Search
              </label>
            </div>

            {/* Input Section */}
            <div className="relative">
              <Input.TextArea
                value={userInputText}
                onChange={userInputChangeHandler}
                className="w-full px-3 py-2.5 border-2 border-blue-200 rounded-lg 
                     focus:border-[#023e8a] focus:ring-2 focus:ring-[#023e8a] focus:ring-opacity-20 
                     transition-all outline-none text-sm text-[#03045e] font-medium 
                     placeholder:text-gray-400 bg-white hover:border-blue-300
                     shadow-sm"
                placeholder="e.g., 'Users in Pune whose name starts with H'"
                rows={2}
              />

              {/* Helper Text */}
              <div className="mt-2 flex items-start gap-1.5 text-[10px] text-gray-600 bg-white/80 rounded-md p-2 border border-blue-100">
                <i className="bi bi-lightbulb-fill text-yellow-500 mt-0.5"></i>
                <div className="flex-1">
                  <span className="font-semibold">Examples:</span>
                  <span className="ml-1">
                    "Users in Mumbai" • "Name starts with P"
                  </span>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <Button
              onClick={askAIHandler}
              className="mt-3 w-full py-2.5 px-4 !bg-gradient-to-r !from-[#023e8a] !to-[#0077b6] 
                   !text-white text-sm font-bold rounded-lg 
                   hover:!from-[#03045e] hover:!to-[#023e8a]
                   !border-none
                   !shadow-md hover:!shadow-lg transition-all duration-200 
                   transform hover:-translate-y-0.5
                   flex items-center justify-center gap-2"
            >
              <i className="bi bi-stars"></i>
              <span>Find Users with AI</span>
              <i className="bi bi-arrow-right-short text-lg"></i>
            </Button>

            {/* AI Response - Enhanced */}
            {aiResponse && aiResponse.length > 0 && (
              <div className="mt-4 bg-white border-2 border-green-200 rounded-lg p-3 shadow-sm animate-slideIn">
                {/* Header */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="bi bi-check2 text-green-600 font-bold text-sm"></i>
                    </div>
                    <p className="text-sm font-bold text-[#023e8a]">
                      AI Found {aiResponse.length} User
                      {aiResponse.length > 1 ? "s" : ""}
                    </p>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium px-2 py-0.5 bg-gray-100 rounded-full">
                    Click to add
                  </span>
                </div>

                {/* User List */}
                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                  {aiResponse.map((user, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        addSelectedUser({
                          id: user.userEmail,
                          name: user.userName,
                          image: user.userProfileImage,
                        })
                      }
                      className="group flex items-center gap-3 p-2.5 border-2 border-gray-200 rounded-lg 
                           cursor-pointer hover:border-[#023e8a] hover:bg-blue-50/50
                           transition-all duration-200 transform hover:scale-[1.02]
                           hover:shadow-md"
                    >
                      {/* Avatar */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-[#023e8a] transition-colors">
                        <ImagePresentation
                          imageKey={user.userProfileImage}
                          divCss="w-full h-full"
                          imgCss="w-full h-full object-cover"
                        />
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#03045e] truncate group-hover:text-[#023e8a] transition-colors">
                          {user.userName}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <i className="bi bi-geo-alt-fill text-[10px] text-gray-400"></i>
                          <p className="text-[10px] text-gray-500 truncate">
                            {user.location}
                          </p>
                        </div>
                      </div>

                      {/* Add Icon */}
                      <div
                        className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center 
                                group-hover:bg-[#023e8a] transition-colors"
                      >
                        <i className="bi bi-plus-lg text-xs text-gray-400 group-hover:text-white transition-colors"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Action Buttons - Compact */}
      <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
        <Button
          onClick={onClose}
          className="flex-1 py-2 px-4 !bg-gray-200 !text-gray-700 font-semibold rounded-lg 
               hover:!bg-gray-300 !border-gray-200 hover:!border-gray-300
               transition-all duration-200 !shadow-none text-sm"
        >
          Cancel
        </Button>

        <Button
          onClick={createChatRoomHandler}
          className="flex-1 py-2 px-4 !bg-[#023e8a] !text-white font-semibold rounded-lg 
               hover:!bg-[#03045e] !border-[#023e8a] hover:!border-[#03045e]
               !shadow-lg hover:!shadow-xl 
               transition-all duration-200 transform hover:-translate-y-0.5 text-sm"
        >
          <i className="bi bi-chat-dots mr-1.5"></i>
          Create Chat
        </Button>
      </div>
    </div>
  );
};

export default CreateRoomPresentation;
