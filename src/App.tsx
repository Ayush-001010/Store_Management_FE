import React, { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import IApp from "./IApp";
import TopNavbar from "./Components/Navbar/TopNavbar/TopNavbar";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SignUp from "./Components/SignUp/SignUp";
import CreateStore from "./Components/CreateStore/CreateStore";
import { useDispatch, useSelector } from "react-redux";
import UserDetailsType from "./Types/Redux/UserDetailsType";
import SideNavbar from "./Components/Navbar/SideNavbar/SideNavbar";
import ShopOwnerDashboard from "./Components/Dashboard/ShopOwner/ShopOwnerDashboard";
import Chat from "./Components/Chat/Chat";
import SignInForm from "./Components/SignInForm/SignInForm";
import { setUserDetailsData } from "./Redux/Slices/UserDetails/UserDetails";

const App: React.FC<IApp> = () => {
  const { isSignIn } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  const dispatch =  useDispatch();

  useEffect(() => {
    const userDetailsString = localStorage.getItem("userDetails");
    if (userDetailsString) {
      // console.log("Found user details in local storage:", userDetailsString);
      const userDetails: UserDetailsType = JSON.parse(userDetailsString);
      dispatch(setUserDetailsData({ userName: "Harry Potter" , ID : 29 , userEmail : "harry.potter@hogwarts.com" }));

    }
  },[]);
  
  return (
    <HashRouter>
      <div className="relative">
        <div>
          <TopNavbar />
          <div className="flex">
          {isSignIn && <SideNavbar />}
            <div className="flex">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/createStore" element={<CreateStore />} />
                <Route path="/shopsDashboard" element={<ShopOwnerDashboard />}/>
                <Route path="/shopChat" element={<Chat />} />
                <Route path="/signIn" element={<SignInForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
