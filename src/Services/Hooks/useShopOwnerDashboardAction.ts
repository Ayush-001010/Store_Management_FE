import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import APIServices from "../API_Call/APIServices";
import ShopOwnerDashboardConfig from "../../Config/ShopOwnerDasboard";
import CardInterface from "../../Types/CardInterface";

const useShopOwnerDashboardAction = () => {
  const { userName, userGender , OrganizationID } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  const [welcomeText, setWelcomeText] = useState<string | null>(null);
  const [cardValues, setCardValues] = useState<Array<CardInterface>>([]);

  const genrateWelcomeText = useCallback(async () => {
    const item = localStorage.getItem("welcomeMessage");
    if (!item) {
      const text = `Genrate Welcome Text for ${userName} who is a ${userGender} shop owner`;
      const response = await APIServices.postAPIForAI("/welcome-message", {
        user_query: text,
        type: "shop_owner",
      });
      console.log("Welcome Text Response: ", response);

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
        organizationId : OrganizationID,
      });
      if (response.success) {
        config.value = response.data;
      }
    }
    return results;
  }, [OrganizationID]);

  useEffect(() => {
    genrateWelcomeText().then((text: string | null) => {
      setWelcomeText(text);
    });
    getCardValues().then((cards: Array<CardInterface>) => {
      setCardValues(cards);
    });
  }, []);
  return { welcomeText , cardValues };
};

export default useShopOwnerDashboardAction;
