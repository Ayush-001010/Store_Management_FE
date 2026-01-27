import React, { useMemo } from "react";
import ISideNavbar from "./ISideNavbar";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";
import SideNavbarConfig from "../../../Config/SideNavbarConfig";
import SideNavbarPresentation from "../../../PresentationComponent/SideNavbarPresentation/SideNavbarPresentation";

const SideNavbar: React.FC<ISideNavbar> = () => {
  const { userRole } = useSelector((state: any) => state.userDetails as UserDetailsType);

  const configs = useMemo(()=> userRole === "shopowner" ? SideNavbarConfig.navTitlesShopOwnerConfig: [], [userRole]);
  return (
  <div className="w-60 border-r border-[#ced4da] h-screen shadow-sm">
    <div className="mt-4 w-full">
        {configs.map((config) => <SideNavbarPresentation config={config} key={config.navTitle}/>)}
    </div>
  </div>)
  ;
};

export default SideNavbar;
