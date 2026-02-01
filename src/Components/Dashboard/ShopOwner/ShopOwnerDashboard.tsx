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
import AnalyticPoints from "../../../UIComponent/AnalyticPoints/AnalyticPoints";

const ShopOwnerDashboard: React.FC<IShopOwnerDashboard> = () => {
    const {welcomeText , cardValues , analyticValue , analyticData , applyHandlerOfAnalytic , storeOpt , analyticPoints} = useShopOwnerDashboardAction();
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
    const analyticBarChangeHandler = (value : string) => {
        console.log("Analytic Bar Selected Value: ", value.split("|"));
        const arr = value.split("|");
        const duration = arr[3];
        const chartType = arr[2];
        const range = arr[1];
        const analyticType = arr[0];
        const storeId = arr[4];
        if(storeId ){
            setAnalyticOptions((prev ) => {
                const obj : AnalyticBarOptionInterface = {
                    label : "Select Shop",
                    options : storeOpt,
                    description : "Select a specific shop to view its analytics",
                    backendKey : "storeId"
                };
                if(prev.length === ShopOwnerDashboardConfig.analyticBarOptions.length){
                    return [...prev , obj];
                }
                return [...prev];
            }); 
        } else {
            setAnalyticOptions((prev ) => {
                prev.pop();
                return [...prev];
            }); 
        }
        applyHandlerOfAnalytic({duration, chartType, analyticType , range , storeId});
    }
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
            <div className="flex justify-center">
                <HeaderCards cardValues={cardValues as CardInterface[]} />
            </div>
            <div className="flex mt-4 w-full">
                <AnalyticPoints analyticBarChangeHandler={analyticBarChangeHandler} data={analyticPoints} />
                <AnalyticBar specificFieldSelectionHandler={specificFieldSelectionHandler} isSpecificFieldSelected={true} specificFieldName="range" applyHandler={applyHandlerOfAnalytic} chartType={analyticValue.chartType === "lineChart" ? "line" : "bar"} options={analyticOptions} analyticValue={analyticValue} analyticData={analyticData}>
                    <AnalyticBar.HeaderOptions/>
                </AnalyticBar>
            </div>
        </div>
    )
};

export default ShopOwnerDashboard;