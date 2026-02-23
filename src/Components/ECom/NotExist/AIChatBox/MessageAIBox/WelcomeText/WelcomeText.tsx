import React from "react";
import IWelcomeText from "./IWelcomeText";

const WelcomeText: React.FC<IWelcomeText> = ({ chat , applySendHandler }) => {
  return (
    <div className="flex justify-end">
      <div className="w-1/2 bg-[#f8f9fa] text-sm text-[#495057] p-2 font-medium rounded-lg shadow-md">
        <p>
          {chat.content.split(" ").map((word, index) => {
            if (chat.boldWords.includes(word)) {
              return (
                <span key={index} className="font-bold text-[#212529]">
                  {word}{" "}
                </span>
              );
            } else {
              return <span key={index}>{word} </span>;
            }
          })}
        </p>
        <p onClick={()=>applySendHandler("Yes, let's begin our magical journey.")} className="mt-2 p-1 bg-[#212529] w-fit shadow-md rounded-lg text-[#f8f9fa] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">Yes, let's begin our magical journey.</p>
      </div>
    </div>
  );
};

export default WelcomeText;
