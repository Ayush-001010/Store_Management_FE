import React, { useEffect, useRef, useState } from "react";
import IChatBox from "./IChatBox";
import { useGetChatContext } from "../Chat";
import EmptyChatBoxPresentation from "../../../PresentationComponent/EmptyChatBoxPresentation/EmptyChatBoxPresentation";
import InputBox from "./InputBox/InputBox";
import useChatMessageAction from "../../../Services/Hooks/useChatMessageAction";
import ZeroMessagePresentation from "../../../PresentationComponent/ZeroMessagePresentation/ZeroMessagePresentation";
import { ChatMessageInterface } from "../../../Types/ChatInterface";
import MessageBox from "./MessageBox/MessageBox";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";
import HeaderBox from "./HeaderBox/HeaderBox";
import DetailsBox from "./DetailsBox/DetailsBox";

const ChatBox: React.FC<IChatBox> = () => {
    const { selectedChatRoom  , sendMessage} = useGetChatContext();
    const { getChatMessages } = useChatMessageAction();
    const { userName } = useSelector((state: any) => state.userDetails as UserDetailsType);
    const [isEmpty, setIsEmpty] = useState(false);
    const [messages , setMessages] = useState<Array<ChatMessageInterface>>([]);
    const [pageNo , setPageNo] = useState(1);
    const [isFirst , setIsFirst] = useState(false);
    const scrollDivRef = useRef<HTMLDivElement>(null);
    const [isFileUploadModalOpen, setIsFileUploadModalOpen] = useState(false);
    const [isOpenDetails , setIsOpenDetails] = useState(false);

    const sendMessageHandler = (message: string , file : File | null) => {
        if(selectedChatRoom){
            sendMessage(message , file, selectedChatRoom);
            setMessages((prevMessages) => [...prevMessages,{ ID: Date.now().toString(), chatRoomID: selectedChatRoom.chatRoomID, senderName: userName || "", messageText: message, messageType: "text", createdAt: Date.now(), updatedAt: Date.now() }]);
            setIsEmpty(false);
        }
    }
    const fetchMessages = async () => {
        const scrollDiv = scrollDivRef.current;
        if (!scrollDiv) return;
        const isAtTop = scrollDiv.scrollTop <= 10;
        
        if(isAtTop || isFirst){
            setIsFirst(false);
            const previousScrollHeight = scrollDiv.scrollHeight;
            const response = await getChatMessages(selectedChatRoom?.chatRoomID || "" , pageNo);
            setPageNo((prev) => {
                return prev + 1;
            });
            if(response.success){
                const {data} = response;
                if(data.length === 0) {
                    return;
                } else {
                    setIsEmpty(false);
                    setMessages( (prev : Array<ChatMessageInterface>) => {
                        if(isFirst){
                            return [...data].reverse();
                        }
                        return [...[...data].reverse() , ...prev];
                    });
                    setTimeout(() => {
                        if (scrollDiv) {
                            scrollDiv.scrollTop = scrollDiv.scrollHeight - previousScrollHeight ;
                        }
                    }, 50);
                }
            }
        }
    }
    const isFileUploadModalOpenHandler = () => {
        setIsFileUploadModalOpen((prev) => !prev);
    }
    const openDetailsHandler = () => {
        setIsOpenDetails((prev) => !prev);
    }
    useEffect(() => {
        const scrollDiv = scrollDivRef.current;
        if (scrollDiv) {
            const handleScroll = () => {
                fetchMessages()
            };
            
            scrollDiv.addEventListener("scroll", handleScroll);
            return () => scrollDiv.removeEventListener("scroll", handleScroll);
        }
    }, [selectedChatRoom, isEmpty , pageNo]);
    useEffect(() => {
        if(isFirst){
            fetchMessages().finally(()=>{
                setTimeout(() => {
                    if(scrollDivRef.current) {
                        scrollDivRef.current.scrollTop = scrollDivRef.current.scrollHeight;
                        console.log("Scrolled to bottom after initial load");
                    }
                }, 100);
            });
        }
    }, [isFirst]);
    useEffect(() => {
        if(selectedChatRoom){
            setIsFirst(true);
        }
    }, [selectedChatRoom]);
    

    return (
        <div className="h-full w-full">
          {!selectedChatRoom && <EmptyChatBoxPresentation />}
          {selectedChatRoom && (
            <div className="relative bg-[#f8f9fa] flex h-[800px] w-[1100px] overflow-hidden rounded-lg">
              {isEmpty && <ZeroMessagePresentation />}
              {!isEmpty && (
                <div className={`transition-all duration-300 ${isOpenDetails ? "w-[800px]" : "w-full"} ${isFileUploadModalOpen ? "opacity-25" : ""}`}>
                  <HeaderBox openDetailsHandler={openDetailsHandler}/>
                  <div className="flex w-full h-[740px]">
                    <div ref={scrollDivRef} className="h-[650px] w-full overflow-y-auto flex flex-col">
                      <MessageBox messages={messages} />
                    </div>
                  </div>
                </div>
              )}
              {isOpenDetails && <DetailsBox />}
              <InputBox 
                isOpenDetails={isOpenDetails} 
                sendMessage={sendMessageHandler} 
                isFileUploadModalOpenHandler={isFileUploadModalOpenHandler}
              />
            </div>
          )}
        </div>
      );
};

export default ChatBox;