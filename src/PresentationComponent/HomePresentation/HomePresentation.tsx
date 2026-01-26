import React from "react";
import IHomePresentation from "./IHomePresentation";
import { Button, Input } from "antd";
import { motion } from "motion/react";
import ChatPresentation from "../ChatPresentation/ChatPresentation";

const HomePresentation: React.FC<IHomePresentation> = ({
  title,
  description,
  chatInputText,
  onChangeChatInputText,
  onSubmitChatInputTextHandler,
  isChatActive,
  chatMessageData
}) => {
  const textVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  return (
    <div
      className={`flex ${
        !isChatActive
          ? "mt-40 flex-col justify-center items-center"
          : "mt-2 flex-col justify-start items-start"
      }`}
    >
      <div className={isChatActive ? "w-full p-1" :"w-1/2"}>
        <h1 className="text-5xl text-[#212529]">
          {`Welcome to ${title}...`.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="inline-block"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        <p className="text-base p-1 text-[#6c757d]">
          {`~ ${description}`.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              className="inline-block"
              variants={textVariant}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </p>
      </div>
      {isChatActive && <ChatPresentation chatMessageData={chatMessageData} />}
      <div
        className={
          !isChatActive
            ? "bg-[#ede0d4] p-2 w-1/2 mt-2 rounded-md shadow-xs"
            : `fixed bottom-10 w-1/2 left-1/2 transform -translate-x-1/2 bg-[#ede0d4] p-4 rounded-md shadow-lg`
        }
      >
        <form onSubmit={onSubmitChatInputTextHandler}>
          <Input.TextArea
            className="rounded-md mb-2 bg-[#ede0d4] text-[#495057] font-medium"
            placeholder="Ask me anything..."
            value={chatInputText}
            bordered={false}
            style={{
              resize: "none",
              color: "#495057",
            }}
            onChange={onChangeChatInputText}
          />
          <div className="flex justify-end">
            <Button
              htmlType="submit"
              className=" h-10 w-10 bg-[#7f5539] shadow-lg hover:bg-[#9c6644] focus:outline-none focus:ring-4 focus:ring-[#d4a72b] border-none rounded-full px-6 py-3 transition duration-300 ease-in-out"
              style={{
                border: "none",
                backgroundColor: "#7f5539",
                fontWeight: "bold",
              }}
            >
              <i className="bi bi-magic text-[#fad643] text-shadow-sm text-lg font-semibold" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePresentation;
