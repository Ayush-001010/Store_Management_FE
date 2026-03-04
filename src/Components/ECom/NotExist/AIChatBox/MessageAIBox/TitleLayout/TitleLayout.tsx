import React from "react";
import ITitleLayout from "./ITitleLayout";
import AICreateLayoutConfig from "../../../../../../Config/AICreateLayoutConfig";
import { Input } from "antd";

const TitleLayout : React.FC<ITitleLayout> = ({chat , applySendHandler}) => {
  // "I want Layout 1 from Title Section Layout"
    return (
        <div className="flex justify-end">
      <div className="w-1/2 bg-[#f8f9fa] text-sm text-[#495057] p-2 font-medium rounded-lg shadow-md">
        <p>
          <span className="font-bold text-[#212529]">AI:</span>
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
        <div>
            <p className="font-bold text-[#212529]">Options : </p>
            {AICreateLayoutConfig.titleSectionDetailsConfig.map((section, index) => (
                <div key={index} className="mt-4 p-2 bg-[#e9ecef] rounded-lg flex flex-col items-start justify-start">
                    <h3 className="font-semibold text-[#212529] mb-1 cursor-pointer hover:underline" onClick={()=>applySendHandler(`I want ${section.title} from Title Section Layout`,"Title-Layout")}>{section.title}</h3>
                    <p>{section.description}</p>
                    <Input.TextArea className="bg-[#e9ecef] rounded-lg mt-1 text-[10px] whitespace-pre-wrap flex justify-start" rows={4} disabled value={section.helpText}></Input.TextArea>
                </div>
            ))}
        </div>
      </div>
    </div>
    );
}

export default TitleLayout;