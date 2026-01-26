import React, { useMemo } from "react";
import IHeader from "./IHeader";

const Header: React.FC<IHeader> = ({ shopNumber }) => {
  const iconCSS = useMemo(
    () =>
      "mx-1 bg-[#ced4da] font-bold text-lg text-[#6c757d] rounded-full p-1 w-8 h-8 flex justify-center items-center shadow-md",
    []
  );
  const deleteIconCSS = useMemo(
    () =>
      "mx-1 bg-[#e5383b] hover:bg-[#660708] cursor-pointer transition delay-150 duration-300 ease-in-out font-semibold text-lg text-[#f5f3f4]  rounded-full p-1 w-8 h-8 flex justify-center items-center shadow-md",
    []
  );

  return (
    <div className="flex justify-between items-center border-b pb-2 border-[#adb5bd] border-dashed mb-2">
      <div className="flex">
        <p className={iconCSS}>
          <i className="bi bi-shop" />
        </p>
        <p className={iconCSS}>{shopNumber}</p>
      </div>
      <div>
        <p className={deleteIconCSS}>
          <i className="bi bi-trash" />
        </p>
      </div>
    </div>
  );
};

export default Header;
