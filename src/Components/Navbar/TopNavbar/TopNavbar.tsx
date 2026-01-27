import React from "react";
import ITopNavbar from "./ITopNavbar";
import { useSelector } from "react-redux";
import CommonConfig from "../../../Config/CommonConfig";
import NavbarPresentation from "../../../PresentationComponent/NavbarPresentation/NavbarPresentation";

const TopNavbar: React.FC<ITopNavbar> = () => {
  const { isSignIn } = useSelector((state: any) => state.userDetails);
  return (
    <div className="border-b border-[#ced4da] m-0 p-1 shadow-sm">
      <NavbarPresentation
        title={CommonConfig.prj_title}
        sub_description={CommonConfig.prj_subDescription}
        isUserLoggedIn={isSignIn}
      />
    </div>
  );
};

export default TopNavbar;
