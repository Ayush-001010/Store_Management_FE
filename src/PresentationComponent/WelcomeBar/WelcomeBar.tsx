import React from "react";
import IWelcomeBar from "./IWelcomeBar";


const WelcomeBar: React.FC<IWelcomeBar> = ({
  userName,
  welcomeMessage,
  placeholderText,
  icons,
}) => {
  return (
    <div>
      <div>
        <p>Hi, {userName}! Welcome back.</p>
        <p>{welcomeMessage || ""}</p>
      </div>
      <div>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full">
          <i className="bi bi-search text-gray-400 text-lg mr-2"></i>
          <input
            type="text"
            placeholder={placeholderText}
            className="flex-1 border-none focus:outline-none text-gray-700 text-base"
          />
        </div>
        <div>
          {icons &&
            icons.map((icon, index) => (
              <i
                key={index}
                className={`${icon.iconClass} text-gray-600 text-xl mx-2 cursor-pointer`}
                onClick={icon.onClick}
              ></i>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeBar;
