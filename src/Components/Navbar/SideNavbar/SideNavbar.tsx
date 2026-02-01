import React, { useMemo } from "react";
import ISideNavbar from "./ISideNavbar";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";
import SideNavbarConfig from "../../../Config/SideNavbarConfig";
import SideNavbarPresentation from "../../../PresentationComponent/SideNavbarPresentation/SideNavbarPresentation";
import CommonConfig from "../../../Config/CommonConfig";

const SideNavbar: React.FC<ISideNavbar> = () => {
  const { userRole } = useSelector((state: any) => state.userDetails as UserDetailsType);

  const configs = useMemo(()=> userRole === "shopowner" ? SideNavbarConfig.navTitlesShopOwnerConfig: [], [userRole]);
  return (
  <div className="sticky top-0 w-full bg-[#fbfefb] border-r border-[#ced4da] h-screen shadow-sm">
    <div className="w-full">
        {configs.map((config) => <SideNavbarPresentation  title={CommonConfig.prj_title} sub_description={CommonConfig.prj_subDescription} config={config} key={config.navTitle}/>)}
    </div>
  </div>)
  ;
};

export default SideNavbar;
