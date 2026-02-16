import React from "react";
import ITopNavbar from "./ITopNavbar";
import { useSelector } from "react-redux";
import NavbarPresentation from "../../../PresentationComponent/NavbarPresentation/NavbarPresentation";

const TopNavbar: React.FC<ITopNavbar> = () => {
  const { isSignIn } = useSelector((state: any) => state.userDetails);
  return (
    <div className="sticky top-0 z-50 bg-[#f8f9fa] h-[66px] border-b border-[#ced4da] p-1">
      <NavbarPresentation isUserLoggedIn={isSignIn} />
    </div>
  );
};

export default TopNavbar;