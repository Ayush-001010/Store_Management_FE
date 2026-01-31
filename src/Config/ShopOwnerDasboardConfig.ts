import { AnalyticBarOptionInterface } from "../Types/AnalyticBarInterface";
import CardInterface from "../Types/CardInterface";

export default class ShopOwnerDashboardConfig {
  static dashboardCards: Array<CardInterface> = [
    {
      title: "Number of Active Shops",
      backendUrl: "/storeManagement/getCardValues",
      tooltipText: "Total number of shops",
      requestBodyType: "totalshops",
      iconClassName : "bi bi-shop-window",  
    },
    {
      title: "Total Profit Making Shops",
      backendUrl: "/storeManagement/getCardValues",
      tooltipText: "Total number profitable shops",
      requestBodyType: "numberOfProfitMakingShops",
      iconClassName : "bi bi-plus-circle-fill",
    },
    {
      title: "Total Profits",
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
      description : "Analytic type to be shown in chart",
      backendKey : "analyticType",
    },
    {
      label:"Range",
      options:[{label : "Across All Shop", value : "acrossAllShop"}, { label : "Specific Shop" , value : "specificShop"}],
      description : "Select range for analytic data",
      backendKey : "range"
    },
    {
      label:"Chart Type",
      options : [{ label : "Bar Chart", value : "barChart"}, { label : "Line Chart", value : "lineChart"}],
      description : "Select the type of chart to display",
      backendKey : "chartType"
    },
    {
      label:"Duration",
      options : [{ label : "Monthly" , value:"monthly"} , {label:"Weekly" , value:"weekly"},{ label:"Yearly" , value:"yearly"}],
      description : "Select duration for analytic data",
      backendKey : "duration"
    }
  ];
  
}
