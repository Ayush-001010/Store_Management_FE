import { AnalyticBarOptionInterface } from "../Types/AnalyticBarInterface";
import CardInterface from "../Types/CardInterface";
import { ColumnInterface, FormatterInterface } from "../Types/DashboardInterface";

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
  static storeColumnConfig : Array<ColumnInterface> =[
    { 
      field : "id",
      headerName : "Shop ID",
      filter : true
    },
    { 
      field : "name",
      headerName : "Shop Name",
      filter : true
    },
    {
      field : "description",
      headerName : "Description",
      filter : true
    },
    {
      field:"city",
      headerName : "City",
      filter : true
    },
    {
      field : "state",
      headerName : "State",
      filter : true
    },
    {
      field:"street",
      headerName : "Street",
      filter : true
    },
    {
      field : "address",
      headerName : "Address",
      filter : true
    },
    {
      field : "postalCode",
      headerName : "Postal Code",
      filter : true
    },
    {
      field : "category",
      headerName : "Category",
      filter : true
    },
    {
      field : "is24hrOpen",
      headerName : "24 Hr Open",
      filter : true
    },
    {
      field : "openingTime",
      headerName : "Opening Time",
      filter : true
    },
    {
      field : "closingTime",
      headerName : "Closing Time",
      filter : true
    },
    {
      field : "firstSaleDate",
      headerName : "First Sale Date",
      filter : true
    }
  ];
  static shopHeaderOptionsArr : Array<string> = [ "Favorites" , "Profit" , "Loss" , "Most Sold Items" ];
  static storeFormatterConfig : Array<FormatterInterface> = [{
    name : "FavoriteFormatter",
    position : "start"
  },{
    name : "profitFormatter",
    position : "end"
  }];
}
