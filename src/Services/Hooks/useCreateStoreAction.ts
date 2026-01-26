import { useCallback, useEffect, useState } from "react";
import APIServices from "../API_Call/APIServices";
import { IOptionInterface } from "../../Types/CommonInterface";

const useCreateStoreAction = () => {
  const [options, setOptions] = useState<Record<string,Array<IOptionInterface>>>({});

  const getOptions = useCallback(async () => {
    const result = {
      state: [],
      shopCategory: [],
    };
    const responseState = await APIServices.postAPIRequest(
      "/master/masterDetails",
      { type: "state" }
    );
    if (responseState?.success) {
        result.state = responseState.data.map((item:any) => ({
            label: item.name,
            value: item.id,
        }));
    }
    const responseCategory = await APIServices.postAPIRequest(
      "/master/masterDetails",
      {type: "category"}
    );
    if (responseCategory?.success) {
        result.shopCategory = responseCategory.data.map((item:any) => ({
            label: item.name,
            value: item.id,
        }));
    }
    console.log("Store Options: ", result);
    return result;
  }, []);

  useEffect(() => {
    getOptions().then((res) => {
      setOptions(res);
    });
  }, []);

  return { options };
};

export default useCreateStoreAction;
