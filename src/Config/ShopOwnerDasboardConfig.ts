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
}
