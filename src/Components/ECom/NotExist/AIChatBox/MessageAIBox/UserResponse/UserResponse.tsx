import React from "react";
import IUserResponse from "./IUserResponse";

const UserResponse: React.FC<IUserResponse> = ({chat}) => {
  return (
    <div className="flex justify-start mt-3">
      <div className="w-1/2 bg-[#f8f9fa] text-sm text-[#495057] p-2 font-medium rounded-lg shadow-md">
        <p>
            <span className="font-bold text-[#212529]">You: </span>
            <span className="text-[#495057]">{chat.content}</span>
        </p>
      </div>
    </div>
  );
};

export default UserResponse;
