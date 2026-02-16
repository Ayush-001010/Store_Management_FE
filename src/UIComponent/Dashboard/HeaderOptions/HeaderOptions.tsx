import React from "react";
import IHeaderOptions from "./IHeaderOptions";
import { useGetDashboardContext } from "../Dashboard";
import DashboardHeaderButton from "../../../PresentationComponent/ButtonUI/DashboardHeaderButton/DashboardHeaderButton";

const HeaderOptions : React.FC<IHeaderOptions> = () => {
    const { headerOptionsArr , headerOptionHandler , headerOptionsValue} = useGetDashboardContext();


    const clickHandler = (name?: string) => {
        if(headerOptionHandler && name)
        headerOptionHandler(name);
    }

    return (
        <div className="flex justify-between w-full my-2 bg-[#ffffff] shadow-md px-4 py-2 rounded-md">
            {headerOptionsArr && headerOptionsArr.map((option) => (
                <DashboardHeaderButton key={Math.random()} text={option.text}  textColor={option.color} backgroundColor={option.backgroundColor} value={headerOptionsValue} clickHandler={clickHandler}/>
            ))}
        </div>
    )
};

export default HeaderOptions;