import { AnalyticBarOptionInterface } from "../Types/AnalyticBarInterface";
import CardInterface from "../Types/CardInterface";

export default class ShopOwnerDashboardConfig {
  static dashboardCards: Array<CardInterface> = [
    {
      title: "Count of Magical Shops",
      backendUrl: "/storeManagement/getCardValues",
      tooltipText: "Total number of shops",
      requestBodyType: "totalshops",
      iconClassName : "bi bi-shop-window",  
    },
    {
      title: "Top-Earning Wizarding Shops",
      backendUrl: "/storeManagement/getCardValues",
      tooltipText: "Total number profitable shops",
      requestBodyType: "numberOfProfitMakingShops",
      iconClassName : "bi bi-plus-circle-fill",
    },
    {
      title: "Grand Sum of Magical Profits",
      backendUrl: "/storeManagement/getCardValues",
      tooltipText: "Total revenue from all shops",
      requestBodyType: "totalrevenue",
      iconClassName : "bi bi-currency-dollar",
    },
  ];
  static analyticBarOptions : Array<AnalyticBarOptionInterface> = [
    {
      label : "Analytic Type",
      options : [{ label :"Revenu", value : "revenue"}, { label : "Loss", value : "loss"} , {label : "profit" , value : "profit"} ],
      //{ label:"compare shops", value : "compareShops"}
      description : "",
      backendKey : "analyticType"
    },
    {
      label:"Range",
      options:[{label : "Across All Shop", value : "acrossAllShop"}, { label : "Specific Shop" , value : "specificShop"}],
      description : "",
      backendKey : "range"
    },
    {
      label:"Chart Type",
      options : [{ label : "Bar Chart", value : "barChart"}, { label : "Line Chart", value : "lineChart"}],
      description : "",
      backendKey : "chartType"
    },
    {
      label:"Duration",
      options : [{ label : "Monthly" , value:"monthly"} , {label:"Weekly" , value:"weekly"},{ label:"Yearly" , value:"yearly"}],
      description : "",
      backendKey : "duration"
    }
  ];
  
}
