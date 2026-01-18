import React from "react";
import IErrorMessageDisplay from "./IErrorMessageDisplay";

const ErrorMessageDisplay :React.FC<IErrorMessageDisplay> = ({ message }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    )
};

export default ErrorMessageDisplay;