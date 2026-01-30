import React, { useState }  from "react";
import IShopOwnerDashboard from "./IShopOwnerDashboard";
import useShopOwnerDashboardAction from "../../../Services/Hooks/useShopOwnerDashboardAction";
import WelcomeBar from "../../../PresentationComponent/WelcomeBar/WelcomeBar";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";
import CardInterface from "../../../Types/CardInterface";
import HeaderCards from "./HeaderCards/HeaderCards";
import AnalyticBar from "../../../UIComponent/AnalyticBar/AnalyticBar";
import ShopOwnerDashboardConfig from "../../../Config/ShopOwnerDasboardConfig";
import { AnalyticBarOptionInterface } from "../../../Types/AnalyticBarInterface";

const ShopOwnerDashboard: React.FC<IShopOwnerDashboard> = () => {
    const {welcomeText , cardValues , analyticValue , analyticData , applyHandlerOfAnalytic , storeOpt} = useShopOwnerDashboardAction();
    const {userName} = useSelector((state: any) => state.userDetails as UserDetailsType);
    const [analyticOptions , setAnalyticOptions] = useState(ShopOwnerDashboardConfig.analyticBarOptions);

    const icons = [
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
    ];

    console.log("Store Options: ", storeOpt);
    const specificFieldSelectionHandler = (value : string)  => {
        console.log("Specific Field Selected Value: ", value);
        if(value === "specificShop") {
            setAnalyticOptions((prev ) => {
                const obj : AnalyticBarOptionInterface = {
                    label : "Select Shop",
                    options : storeOpt,
                    description : "Select a specific shop to view its analytics",
                    backendKey : "storeId"
                };
                return [...prev , obj];
            });
        } else {
            setAnalyticOptions((prev ) => {
                prev.pop();
                return [...prev];
            });
        }
    }

    return (
        <div className="w-full">
            <WelcomeBar userName={userName || ""} welcomeMessage={welcomeText} placeholderText="Search Shops" icons={icons} />
            <HeaderCards cardValues={cardValues as CardInterface[]} />
            <div>
                <p>
                    Upcomming soon...
                </p>
                <AnalyticBar specificFieldSelectionHandler={specificFieldSelectionHandler} isSpecificFieldSelected={true} specificFieldName="range" applyHandler={applyHandlerOfAnalytic} chartType={analyticValue.chartType === "lineChart" ? "line" : "bar"} options={analyticOptions} analyticValue={analyticValue} analyticData={analyticData}>
                    <AnalyticBar.HeaderOptions/>
                </AnalyticBar>
            </div>
        </div>
    )
};

export default ShopOwnerDashboard;