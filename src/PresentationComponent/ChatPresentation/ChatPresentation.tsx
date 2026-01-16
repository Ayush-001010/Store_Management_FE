import React from "react";
import IChatPresentation from "./IChatPresentation";

const ChatPresentation: React.FC<IChatPresentation> = ({
  chatMessageData: data,
}) => {
  return (
    <div className="w-full h-[500px] p-6 rounded-lg space-y-4 overflow-y-auto">
      {/* Loop through Chat Messages */}
      {data.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === "user" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`p-4 text-sm max-w-lg rounded-xl shadow-md ${
              message.role === "user"
                ? "bg-blue-100 text-blue-900 border-l-4 border-blue-400"
                : "bg-green-100 text-green-900 border-r-4 border-green-400"
            }`}
            style={{
              margin: message.role === "user" ? "0 0 0 10px" : "0 10px 0 0",
            }}
          >
            <p className="font-medium">
              {message.role === "user" ? "👤 User: " : "🤖 Assistant: "} {message.response}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatPresentation;