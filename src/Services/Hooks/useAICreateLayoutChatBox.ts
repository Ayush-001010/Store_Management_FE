import { useSelector } from "react-redux";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import { useCallback, useEffect, useState } from "react";
import APIServices from "../API_Call/APIServices";
import { AICreateLayoutChatInterface } from "../../Types/AICreateLayoutChatInterface";

const useAICreateLayoutChatBox = () => {
    const { userName , ID} = useSelector((state : any) => state.userDetails as UserDetailsType);
    const [messages , setMessages] = useState<Array<AICreateLayoutChatInterface>>([]);

    const joinTheChatBot = useCallback( async () => {
        const response = await APIServices.postAPIForAI("/create-layout-ai" , {
                "user_input": `Hey ${userName} Just Join The Chat`,
                "user_id": ID
        })
        console.log(response);
        return response;
    },[userName , ID]);
    const sendResponse = async (value : string) => {
        setMessages((prev : any) => [...prev , {
        }])
        const response = await APIServices.postAPIForAI("/create-layout-ai" , {
                "user_input": value,
                "user_id": ID
        })
        console.log(response);
        return response;
    };

    useEffect(() => {
        if(userName && ID) {
            setMessages([{
                content :"",
                isLoading : true,
                type : "Welcome",
                boldWords : [],
                isUser : false
            }])
            joinTheChatBot().then((res) => {
                if(res.success){
                    setMessages((prev : any) => [res.data]);
                }
            });
        }
    }, [userName , ID]);
    
    return {  joinTheChatBot , messages , sendResponse };
};

export default useAICreateLayoutChatBox;