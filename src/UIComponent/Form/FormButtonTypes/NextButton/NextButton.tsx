import React from "react";
import INextButton from "./INextButton";
import { Button } from "antd";
import NextButtonUI from "../../../../PresentationComponent/FormPresentationComponent/Button/NextButton/NextButtonUI";

const NextButton : React.FC<INextButton> = () => {
    return (
        <div className="w-1/2 flex justify-center">
            <NextButtonUI text={"Cast the Next Spell!!"} />
        </div>
    )
};

export default NextButton;