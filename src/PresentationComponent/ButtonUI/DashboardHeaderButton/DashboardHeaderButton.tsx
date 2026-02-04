import React from "react";
import IDashboardHeaderButton from "./IDashboardHeaderButton";

const DashboardHeaderButton : React.FC<IDashboardHeaderButton> = ({text , clickHandler , value}) => {
    return (
        <div>
            <button onClick={()=>{
                if(clickHandler)
                clickHandler(text);
            }} className={value === text ? "bg-[#0353a4] p-2 rounded-full text-[#f5ebe0]p-2 rounded-full text-[#f5ebe0] hover:bg-[#023e7d] transform transition-transform duration-300 hover:-translate-y-1": "bg-[#023e7d] p-2 rounded-full text-[#f5ebe0] shadow-md hover:bg-[#0353a4] hover:shadow-lg transform transition-transform duration-300 hover:-translate-y-1"}>
                {text}
            </button>
        </div>
    )
};

export default DashboardHeaderButton;