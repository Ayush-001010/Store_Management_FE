import React from "react";
import ITextLinkCard from "./ITextLinkCard";
import { Link } from "react-router-dom";

const TextLinkCard: React.FC<ITextLinkCard> = ({ children, navLink }) => {
  return (
    <Link to={navLink}>
      <p className="m-1 text-lg hover:font-medium text-[#495057] hover:text-[#000000] cursor-pointer hover:underline">
        {children}
      </p>
    </Link>
  );
};

export default TextLinkCard;
