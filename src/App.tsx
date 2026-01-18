import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import IApp from "./IApp";
import TopNavbar from "./Components/Navbar/TopNavbar/TopNavbar";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SignUp from "./Components/SignUp/SignUp";
import CreateStore from "./Components/CreateStore/CreateStore";

const App: React.FC<IApp> = () => {
  return (
    <HashRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createStore" element={<CreateStore />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
