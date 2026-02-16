import React from "react";
import ISearchBox from "./ISearchBox";

const SearchBox: React.FC<ISearchBox> = () => {
  return (
    <div className="my-2">
      <div className="flex justify-between bg-[#dee2e6] shadow-xs h-10 rounded-md px-2">
        <input className="bg-transparent" placeholder="Search..."/>
        <p className="m-0 flex items-center">
          <i className="bi bi-search text-[#6c757d] font-semibold" />
        </p>
      </div>
    </div>
  );
};

export default SearchBox;
