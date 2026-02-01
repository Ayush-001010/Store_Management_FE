import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import APIServices from "../API_Call/APIServices";
import ShopOwnerDashboardConfig from "../../Config/ShopOwnerDasboardConfig";
import CardInterface from "../../Types/CardInterface";
import { AnalyticDataInterface } from "../../Types/AnalyticBarInterface";
import CommonConfig from "../../Config/CommonConfig";
import { IOptionInterface } from "../../Types/CommonInterface";
import AnalyticDataContext from "../../Types/AnalyticPoints";

const useShopOwnerDashboardAction = () => {
  const { userName, userGender, OrganizationID } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  const [welcomeText, setWelcomeText] = useState<string | null>(null);
  const [cardValues, setCardValues] = useState<Array<CardInterface>>([]);
  const [analyticValue, setAnalyticValue] = useState<{
    duration: string;
    chartType: string;
    analyticType: string;
    range:string;
    storeId?:string;
  }>({
    duration: "yearly",
    chartType: "lineChart",
    analyticType: "revenue",
    range:"acrossAllShop",
    storeId:""
  });
  const [analyticData, setAnalyticData] = useState<
    Array<AnalyticDataInterface>
  >([]);
  const [storeOpt , setStoreOpt] = useState<Array<IOptionInterface>>([]);
  const [analyticPoints , setAnalyticPoints] = useState<Array<AnalyticDataContext>>([]);

  const genrateWelcomeText = useCallback(async () => {
    const item = localStorage.getItem("welcomeMessage");
    if (!item) {
      const text = `Genrate Welcome Text for ${userName} who is a ${userGender} shop owner`;
      const response = await APIServices.postAPIForAI("/welcome-message", {
        user_query: text,
        type: "shop_owner",
      });

      if (response.success) {
        localStorage.setItem("welcomeMessage", response.data);
        return response.data;
      }
    } else {
      console.log("Welcome Text from Local Storage: ", item);
      return item;
    }
    return null;
  }, [userName, userGender]);
  const getCardValues = useCallback(async () => {
    const configs: Array<CardInterface> =
      ShopOwnerDashboardConfig.dashboardCards;
    const results: Array<CardInterface> = [...configs];
    for (const config of configs) {
      const response = await APIServices.postAPIRequest(config.backendUrl, {
        type: config.requestBodyType,
        organizationId: OrganizationID,
      });
      if (response.success) {
        config.value = response.data;
      }
    }
    return results;
  }, [OrganizationID]);
  const analyticDataFunc = useCallback(async (val :{duration: string,chartType: string,analyticType: string , range : string , storeId ? : string} ) => {
    const response = await APIServices.postAPIRequest("/storeManagement/getAnalytics",
      {
        type: val.range,
        analyticType: val.analyticType,
        durationType: val.duration,
        organizationId: OrganizationID,
        storeId : val?.storeId || ""
      }
    );
    return response.success ? response.data : [];
  }, [OrganizationID]);
  const applyHandlerOfAnalytic = async (val : {duration: string,chartType: string,analyticType: string , range : string , storeId ? : string}) : Promise<void> => {
    setAnalyticValue(val);
    const res: Array<any> = await analyticDataFunc(val);
    const arr: Array<AnalyticDataInterface> = [];
    res.forEach((item: any) => {
      var obj: AnalyticDataInterface = {
        xAxisName: `${ val.duration === "yearly" ?  CommonConfig.month[item.month] : val.duration === "monthly" ? `D-${item.day}` : `D-${item.date.toString()}`}${ val.duration === "yearly" ?   `' ${item.year.toString()[2]}${
          item.year.toString()[3]
        }` : ""}`,
        value: item.value,
      };
      arr.push(obj);
    });
    setAnalyticData(arr);
  }
  const getOptions = useCallback((type : string) => {
    const response = APIServices.postAPIRequest("/storeManagement/getOptions", {
      type: type,
      organizationId: OrganizationID,
    });
    return response;
  },[OrganizationID]);
  const analyticPointsFunc = useCallback( async () => {
    const analyticPointsLocal = localStorage.getItem("analyticPointsShopOwner");
    if(analyticPointsLocal){
      console.log("Analytic Points from Local Storage: ", analyticPointsLocal);
      return JSON.parse(analyticPointsLocal) as Array<AnalyticDataContext>;
    }
    const response = await APIServices.postAPIForAI("/analytic-newspaper-shopowner", {
      organization_id: OrganizationID,
    });
    console.log("Analytic Points Response: ", response);
    if(response.success){
      localStorage.setItem("analyticPointsShopOwner" , JSON.stringify(response.data));
    }
    return response.success ? response.data : [];
  },[OrganizationID]);

  useEffect(() => {
    genrateWelcomeText().then((text: string | null) => {
      setWelcomeText(text);
    });
    getCardValues().then((cards: Array<CardInterface>) => {
      setCardValues(cards);
    });
    analyticDataFunc(analyticValue).then((res: Array<any>) => {
      // set analytic data state here.
      const arr: Array<AnalyticDataInterface> = [];
      res.forEach((item: any) => {
        var obj: AnalyticDataInterface = {
          xAxisName: `${CommonConfig.month[item.month]}'${item.year.toString()[2]}${
            item.year.toString()[3]
          }`,
          value: item.value,
        };
        arr.push(obj);
      });
      setAnalyticData(arr);
    });
    getOptions("storeList").then((res:any) => {
      if(res.success){
        const options : Array<IOptionInterface> = res.data.map((item:any) => ({
          label: item.name,
          value: item.id
        }));
        setStoreOpt(options);
      }
    });
    analyticPointsFunc().then((data : Array<AnalyticDataContext>) => {
      setAnalyticPoints(data);
    });
  }, []);
  return { welcomeText, cardValues, analyticValue , analyticData , applyHandlerOfAnalytic , storeOpt , analyticPoints };
};

export default useShopOwnerDashboardAction;
