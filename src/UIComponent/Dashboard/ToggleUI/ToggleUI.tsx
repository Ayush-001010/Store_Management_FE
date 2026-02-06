import React, { useState } from "react";
import IToggleUI from "./IToogleUI";
import { useGetDashboardContext } from "../Dashboard";

const ToggleUI: React.FC<IToggleUI> = () => {
  const [isGridView, setIsGridView] = useState(false); // Default to Table view
  const {gridView , changeViewHandler} = useGetDashboardContext();

  const clickHandler =(val : "grid" | "table") => {
    if(val === "grid"){
      setIsGridView(true);
      changeViewHandler("grid");
    }else{
      setIsGridView(false);
      changeViewHandler("table");
    }

  }
  return (
    <div className="flex items-center justify-center bg-[#f8f9fa]">
      <div className="relative flex items-center border border-[#ced4da] rounded-full bg-[#e9ecef]">
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-[#343a40] rounded-full shadow-lg transition-all duration-300 ${
            isGridView ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
        <button
          className={`relative w-1/2 text-sm font-medium px-6 py-2 z-10 transition duration-300 ${
            !isGridView ? "text-white" : "text-[#495057]"
          }`}
          onClick={()=>clickHandler("table")}
        >
          Table
        </button>
        <button
          className={`relative w-1/2 text-sm font-medium px-6 py-2 z-10 transition duration-300 ${
            isGridView ? "text-white" : "text-[#495057]"
          }`}
          onClick={() => clickHandler("grid")}
        >
          Grid
        </button>
      </div>
    </div>
  );
};

export default ToggleUI;