import React from "react";
import ISectionHeader from "./ISectionHeader";

const SectionHeader: React.FC<ISectionHeader> = ({ text }) => {
  return (
    <div className="m-1">
      <p className="m-0 text-sm text-[#0d1321] underline font-normal">{text}</p>
    </div>
  );
};

export default SectionHeader;
