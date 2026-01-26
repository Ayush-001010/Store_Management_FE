import React from "react";
import IWelcomeBar from "./IWelcomeBar";
import WandImageObj from "../../Images/icons8-magic-wand-50.png";

const WelcomeBar: React.FC<IWelcomeBar> = ({
  userName,
  welcomeMessage,
  placeholderText,
  icons,
}) => {
  return (
    <div className=" flex bg-[#f8f9fa] shadow-md rounded-lg mt-4 mx-2 p-2">
      <div className="flex flex-col w-md mx-1">
        <p className="text-xl m-0 text-shadow-md text-[#343a40]">
          Hi, {userName}! Welcome back...
        </p>
        <p className="text-xs">{welcomeMessage || ""}</p>
      </div>
      <div className="flex justify-end items-center">
        <div className="flex items-center border-1 border-[#212529] rounded-xl px-3 ml-1 py-2 w-full">
          <i className="bi bi-search text-[#212529] text-lg mr-2"></i>
          <input
            type="text"
            placeholder={placeholderText}
            className="flex-1 border-none focus:outline-none bg-transparent text-gray-700 text-base"
          />
        </div>
        <div className="flex bg-[#e9ecef] shadow-md rounded-full ml-4 p-1">
          {icons &&
            icons.map((icon, index) => (
              <p className="text-semibold">
                <i
                  key={index}
                  className={`${icon.iconClass} text-[#495057] text-xl mx-2 cursor-pointer`}
                  onClick={icon.onClick}
                ></i>
              </p>
            ))}
        </div>
      </div>
      <div className="flex  items-center ml-1 ">
        <img src={WandImageObj} alt="Magic Wand" className="w-9 h-9 p-2 bg-[#edc531] shadow-md font-bold text-[#76520e] rounded-lg" />
      </div>
    </div>
  );
};

export default WelcomeBar;
