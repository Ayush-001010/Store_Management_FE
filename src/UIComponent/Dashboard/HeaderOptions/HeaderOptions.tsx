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
        <div className="flex justify-between w-full my-2">
            {headerOptionsArr && headerOptionsArr.map((option) => (
                <DashboardHeaderButton key={option} text={option}  value={headerOptionsValue} clickHandler={clickHandler}/>
            ))}
        </div>
    )
};

export default HeaderOptions;