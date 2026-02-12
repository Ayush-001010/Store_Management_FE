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
  <div className="sticky top-0 w-[80px] bg-[#f8f9fa] border-r border-[#ced4da] h-screen shadow-sm">
    <div className="w-[80px] flex flex-col items-center pt-4">
        {configs.map((config) => <SideNavbarPresentation  title={CommonConfig.prj_title} sub_description={CommonConfig.prj_subDescription} config={config} key={config.navTitle}/>)}
    </div>
  </div>)
  ;
};

export default SideNavbar;
