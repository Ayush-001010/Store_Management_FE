import React from "react";
import IErrorMessageDisplay from "./IErrorMessageDisplay";

const ErrorMessageDisplay :React.FC<IErrorMessageDisplay> = ({ message }) => {
    return (
        <div>
            <p className="m-0  text-xs font-semibold  text-[#9d0208]">{message}</p>
        </div>
    )
};

export default ErrorMessageDisplay;