import React from "react";
import INextButton from "./INextButton";
import { Button } from "antd";

const NextButton : React.FC<INextButton> = () => {
    return (
        <div>
            <Button type="primary" htmlType="submit">Next</Button>
        </div>
    )
};

export default NextButton;