import React from "react";
import IDashboardHeaderButton from "./IDashboardHeaderButton";

const DashboardHeaderButton: React.FC<IDashboardHeaderButton> = ({ text, clickHandler, value, textColor, backgroundColor }) => {
  return (
    <div>
      <button
        onClick={() => {
          if (clickHandler) clickHandler(text);
        }}
        style={{
          backgroundColor: text === value ? "#0466c8" : backgroundColor,
          color: text === value ? "#fff": textColor,
        }}
        className="p-2 rounded-full shadow-md hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1"
      >
        {text}
      </button>
    </div>
  );
};

export default DashboardHeaderButton;