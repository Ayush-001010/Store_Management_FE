import React from "react";
import ITextLinkButton from "./ITextLinkButton";
import { Link } from "react-router-dom";

const TextLinkButton: React.FC<ITextLinkButton> = ({text , link}) => {
    return (
        <div>
            <Link to={link}>
            <p>
                {text}
            </p>
            </Link>
        </div>
    )
};

export default TextLinkButton;