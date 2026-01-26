import React from "react";
import IShopOwnerDashboard from "./IShopOwnerDashboard";
import useShopOwnerDashboardAction from "../../../Services/Hooks/useShopOwnerDashboardAction";
import WelcomeBar from "../../../PresentationComponent/WelcomeBar/WelcomeBar";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";
import CardInterface from "../../../Types/CardInterface";
import DashboardCard from "../../../PresentationComponent/Cards/DashboardCard/DashboardCard";

const ShopOwnerDashboard: React.FC<IShopOwnerDashboard> = () => {
    const {welcomeText , cardValues} = useShopOwnerDashboardAction();
    const {userName} = useSelector((state: any) => state.userDetails as UserDetailsType);

    return (
        <div className="w-full">
            <WelcomeBar userName={userName || ""} welcomeMessage={welcomeText} placeholderText="Search Shops" icons={[
                {
                    iconClass: "bi bi-bell",
                    onClick: () => {
                        console.log("Notification icon clicked");
                    }
                },
                {
                    iconClass: "bi bi-question-circle",
                    onClick: () => {
                        console.log("Help icon clicked");
                    }
                }
            ]} />
            <div className="flex flex-row gap-4 mt-4">
                {cardValues.map((card:CardInterface , index : number) => <DashboardCard key={(Math.random()*index).toString()} config={card}  />)}
            </div>
        </div>
    )
};

export default ShopOwnerDashboard;