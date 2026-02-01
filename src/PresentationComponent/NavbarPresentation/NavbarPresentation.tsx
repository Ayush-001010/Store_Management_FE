import React from "react";
import INavbarPresentation from "./INavbarPresentation";
import SignUpPresentation from "./SignUpPresentation/SignUpPresentation";
import SignInPresentation from "./SignInPresentation/SignInPresentation";

const NavbarPresentation: React.FC<INavbarPresentation> = ({
  isUserLoggedIn,
}) => {
 

  return (
    <div className="flex justify-end h-12">
      
      {isUserLoggedIn && <SignInPresentation />}
      {!isUserLoggedIn && <SignUpPresentation />}
    </div>
  );
};

export default NavbarPresentation;
