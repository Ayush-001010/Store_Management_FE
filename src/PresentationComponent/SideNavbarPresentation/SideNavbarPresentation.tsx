import React, { useMemo, useState } from "react";
import ISideNavbarPresentation from "./ISideNavbarPresentation";
import { Link } from "react-router-dom";

const SideNavbarPresentation : React.FC<ISideNavbarPresentation> = ({config}) => {
    const [activeLink  , setActiveLink] = useState<string>("/shopsDashboard");

    const nonActiveLinkClass = useMemo(()=>"text-2xl h-20 content-center  text-[#343a40]  hover:text-[#023e8a] bg-none  text-shadow-sm font-normal hover:bg-[#e9ecef] w-full",[]);
    const activeLinkClass = useMemo(()=>" text-2xl h-20 content-center text-[#023e8a] border-r-2 border-[#023e8a]  hover:text-[#343a40] bg-[#f8f9fa]   text-shadow-sm font-normal hover:bg-[#e9ecef] w-full",[]);
    return (
        <>
            <div className="w-full text-center cursor-pointer">
                <Link to={config.link}>
                <p className={config.link === activeLink ? activeLinkClass : nonActiveLinkClass}>
                    {config.iconClass ? <span><i className={"mx-2 font-bold " + config.iconClass}/></span> : ""}
                    {config.navTitle}</p>
                </Link>
            </div>
        </>
    )
};

export default SideNavbarPresentation;