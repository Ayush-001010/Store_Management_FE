import React from "react";
import IECom from "./IECom";
import useEComAction from "../../Services/Hooks/useEComAction";
import NotExist from "./NotExist/NotExist";

const ECom: React.FC<IECom> = () => {
    const { isLayoutExist } = useEComAction();

    return (
        <div>
            {!isLayoutExist && <NotExist />}
        </div>
    )
};

export default ECom;