import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import IApp from "./IApp";
import TopNavbar from "./Components/Navbar/TopNavbar/TopNavbar";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SignUp from "./Components/SignUp/SignUp";
import CreateStore from "./Components/CreateStore/CreateStore";
import { useSelector } from "react-redux";
import UserDetailsType from "./Types/Redux/UserDetailsType";
import SideNavbar from "./Components/Navbar/SideNavbar/SideNavbar";
import ShopOwnerDashboard from "./Components/Dashboard/ShopOwner/ShopOwnerDashboard";

const App: React.FC<IApp> = () => {
  const { isSignIn } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  return (
    <HashRouter>
      <div className="relative">
        <div className="flex">
          {isSignIn && <SideNavbar />}
          <div>
            <TopNavbar />
            <div className="flex">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/createStore" element={<CreateStore />} />
                <Route
                  path="/shopsDashboard"
                  element={<ShopOwnerDashboard />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
