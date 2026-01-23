import React from "react";
import IShopOwnerDashboard from "./IShopOwnerDashboard";
import useShopOwnerDashboardAction from "../../../Services/Hooks/useShopOwnerDashboardAction";
import WelcomeBar from "../../../PresentationComponent/WelcomeBar/WelcomeBar";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";

const ShopOwnerDashboard: React.FC<IShopOwnerDashboard> = () => {
    const {welcomeText} = useShopOwnerDashboardAction();
    const {userName} = useSelector((state: any) => state.userDetails as UserDetailsType);

    return (
        <div>
            <WelcomeBar userName={userName || ""} welcomeMessage={welcomeText} placeholderText="Search Shops" icons={[
                {
                    iconClass: "bi bi-bell",
                    onClick: () => {
                        console.log("Notification icon clicked");
                    }
                },
                {
                    iconClass: "bi bi-question",
                    onClick: () => {
                        console.log("Help icon clicked");
                    }
                }
            ]} />
        </div>
    )
};

export default ShopOwnerDashboard;