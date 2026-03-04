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
    const sendResponse = async (value : string , type : "Layout" | "Title" | "Header" | "Title-Layout") => {
        setMessages((prev : any) => {
            const newMessages : Array<AICreateLayoutChatInterface> = [...prev];
            newMessages.push({
                content : value,
                isLoading : true,
                type : "Response",
                boldWords : [],
                isUser : true
            });
            if(type === "Layout"){
                newMessages.push({
                    content : "",
                    isLoading : true,
                    type : "Layout",
                    boldWords : [],
                    isUser : false
                });
            } else if(type === "Title"){
                newMessages.push({
                    content : "",
                    isLoading : true,
                    type : "Title",
                    boldWords : [],
                    isUser : false
                });
            }
            return newMessages;
        });
        const response = await APIServices.postAPIForAI("/create-layout-ai" , {
                "user_input": value,
                "user_id": ID
        })
        console.log(response);
        if(response.success){
            setMessages((prev : any) => {
                const newMessages : Array<AICreateLayoutChatInterface> = [...prev];
                newMessages[newMessages.length - 1].content = response.data.content;
                newMessages[newMessages.length - 1].isLoading = false;
                newMessages[newMessages.length - 1].boldWords = response.data.boldWords;
                if(type === "Title-Layout"){
                    if(!response.data.noOfText) return newMessages;
                    newMessages[newMessages.length - 2].noOfText = response.data.noOfText;
                }
                return newMessages;
            });
        }
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