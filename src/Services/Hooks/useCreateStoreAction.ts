import { get } from "http";
import { useCallback, useEffect } from "react";
import APIServices from "../API_Call/APIServices";

const useCreateStoreAction = () => {

    const getOptions = useCallback(async ()=>{
        const response = await APIServices.postAPIRequest("/master/locationDetails",{type : "state"});
        console.log("Response from getOptions: ", response);
    },[]);

    useEffect(()=>{
        getOptions();
    },[])
}

export default useCreateStoreAction;