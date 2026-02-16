import React from "react";
import IUserPannel from "./IUserPannel";
import UserProfile from "./UserProfile/UserProfile";
import SearchBox from "./SearchBox/SearchBox";
import Header from "./Header/Header";
import Body from "./Body/Body";

const UserPannel : React.FC<IUserPannel> = () => {
    return (
        <div className="border border-r-1 h-full p-2 w-[300px]">
            <UserProfile />
            <SearchBox />
            <Header />
            <Body/> 
        </div>
    )
};

export default UserPannel;