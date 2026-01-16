import React from "react";
import ITextLinkCard from "./ITextLinkCard";

const TextLinkCard: React.FC<ITextLinkCard> = ({ children }) => {
    return (
        <p className="m-1 text-lg hover:font-medium text-[#495057] hover:text-[#000000] cursor-pointer hover:underline">
            {children}
        </p>
    );
};

export default TextLinkCard;