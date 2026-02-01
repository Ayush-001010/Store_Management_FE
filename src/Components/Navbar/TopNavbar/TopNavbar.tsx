import React from "react";
import ITopNavbar from "./ITopNavbar";
import { useSelector } from "react-redux";
import CommonConfig from "../../../Config/CommonConfig";
import NavbarPresentation from "../../../PresentationComponent/NavbarPresentation/NavbarPresentation";

const TopNavbar: React.FC<ITopNavbar> = () => {
  const { isSignIn } = useSelector((state: any) => state.userDetails);
  return (
    <div className=" sticky  top-0 bg-[#fbfbf2] h-[66px] border-b border-[#ced4da] m-0 p-1 shadow-sm">
      <NavbarPresentation
        isUserLoggedIn={isSignIn}
      />
    </div>
  );
};

export default TopNavbar;
