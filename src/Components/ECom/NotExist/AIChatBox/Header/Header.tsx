import React from "react";
import IHeader from "./IHeader";

const Header :  React.FC<IHeader> = () => {
    return (
        <div className="w-full h-16 border-b-2 border-gray-300 flex items-center justify-between px-4 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold m-0 p-0">AI Chat Box</h2>
            <p className="m-1 text-xs">This AI chat box helps you create your own e-commerce layout.</p>
        </div>
    )
};

export default React.memo(Header);