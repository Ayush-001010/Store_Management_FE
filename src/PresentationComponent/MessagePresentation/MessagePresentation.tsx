import React, { memo, useEffect, useMemo } from "react";
import IMessagePresentation from "./IMessagePresentation";
import { useSelector } from "react-redux";
import UserDetailsType from "../../Types/Redux/UserDetailsType";
import moment from "moment";
import useCommonAction from "../../Services/Hooks/useCommonAction";
import ImagePresentation from "../ImagePresentation/ImagePresentation";

const MessagePresentation: React.FC<IMessagePresentation> = ({ data }) => {
  const {getImages} = useCommonAction();
  const [url , setURL] = React.useState<string>("");
  const { userName } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  const { senderName, createdAt, messageText } = data;
  const messageTime = useMemo(() => {
    const date = new Date(createdAt);
    return moment(date).format("hh:mm A");
  }, []);
  const isOwnMessage = senderName === userName;
  const itNewMessage = useMemo(() => {
    const now = Date.now();
    return now - createdAt < 5000;
  }, [createdAt]);

  useEffect(()=>{
    if(data.fileURL){
      getImages(`Chat/${data.fileURL}`).then((response) => {
        if(response.success){
          console.log("Fetched image URL:", response.data);
          setURL(response.data || "");
        }
      });
    }
  },[data.fileURL])

  return (
    <div className={`flex  ${isOwnMessage ? "justify-end" : "justify-start"} m-3`} >
      <div className={`p-2 rounded-lg shadow-sm ${
          isOwnMessage
            ? "bg-[#adb5bd] text-[#212529] rounded-br-none"
            : "bg-[#e9ecef] text-[#212529]rounded-bl-none"
        }`}
        >
        {(data.fileURL && url.length > 0) && (
          <div className="mb-2">
            {data.fileType === "Image" ? (
              <ImagePresentation imageURL={url} divCss="flex justify-center items-center my-1" imgCss="w-64 h-64 rounded-lg object-cover shadow-xs"  />
            ) : (
              <div className="bg-[#f8f9fa] p-2 rounded-md text-[#212529] w-[200px] hover:underline cursor-pointer hover:bg-[#e9ecef]"> 
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-file-earmark-arrow-down m-2"/>
                    {data.fileURL}
                </a>
              </div>
            )}
          </div>
        )}
        <p className={`text-xs opacity-75 mb-1 ${itNewMessage ? "animate-fadeIn" : ""}`}>
          {isOwnMessage ? "You" : senderName} • {messageTime}
        </p>
        <p className={`text-sm break-words font-medium ${itNewMessage ? "animate-fadeIn" : ""}`}>{messageText}</p>
      </div>
    </div>
  );
};

export default memo(MessagePresentation);
