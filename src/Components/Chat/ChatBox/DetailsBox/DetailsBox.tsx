import React, { useEffect, useState } from "react";
import IDetailsBox from "./IDetailsBox";
import { useGetChatContext } from "../../Chat";
import ImagePresentation from "../../../../PresentationComponent/ImagePresentation/ImagePresentation";
import useChatMessageAction from "../../../../Services/Hooks/useChatMessageAction";
import moment from "moment";

type FileType = "Image" | "File" | null;

const DetailsBox: React.FC<IDetailsBox> = () => {
  const { selectedChatRoom } = useGetChatContext();
  const { getCountOfFileType , getFilesAndImages } = useChatMessageAction();
  const [imageCount, setImageCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [selectedCard , setSelectedCard] = useState<"Image" | "File" | null>(null);
  const [files , setFiles] = useState<Array<{fileURL : string , senderName : string ,   createdAt : Date}>>([]);

  const clickHandler = (type : "Image" | "File") => {
    setSelectedCard(type);
    setFiles([]);
  };
  useEffect(() => {
    if (selectedChatRoom) {
      getCountOfFileType(selectedChatRoom.chatRoomID, "Image").then(
        (response) => {
          if (response.success) {
            setImageCount(response.data);
          }
        }
      );
      getCountOfFileType(selectedChatRoom.chatRoomID, "Other").then(
        (response) => {
          if (response.success) {
            setFileCount(response.data);
          }
        }
      );
    }
  }, [selectedChatRoom]);
  useEffect(()=>{
    const timer = setTimeout(async () => {
        if(selectedCard){
            const response = await getFilesAndImages( selectedChatRoom?.chatRoomID || "" , selectedCard === "Image" ? "Image" : "Other");
            if(response.success){
                setFiles(response.data.map((item : any) => {
                    return { fileURL : item.fileURL , senderName : item.senderName , createdAt : new Date(item.createdAt)};
                }));
            } else {
                setFiles([]);
            }
        }
    },1000);
    return () => {
      clearTimeout(timer);
    };
  },[selectedCard]);

  return (
    <div className="w-[300px] bg-white border-l border-gray-300 p-4 absolute right-0 top-0 h-full overflow-y-auto">
      <div>
        <ImagePresentation
          divCss="flex justify-center items-center my-1"
          imgCss="w-54 h-54 rounded-xl object-cover shadow-lg"
          imageKey={selectedChatRoom?.chatRoomImage || ""}
        />
        <p className="mt-2 text-center text-lg font-semibold text-[#001233]">
          {selectedChatRoom?.roomName}
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <div
          onClick={() => clickHandler("Image")}
          className={`cursor-pointer w-1/2 rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border ${
            selectedCard === "Image"
              ? "bg-gradient-to-br from-[#8fbc8f] to-[#6b9b6b] border-[#6b9b6b]"
              : "bg-gradient-to-br from-[#bfd8bd] to-[#a8c9a5] border-[#a8c9a5]"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <i className="bi bi-file-earmark-image text-2xl text-[#004b23]" />
            <p
              className={`text-[10px] uppercase ${
                selectedCard === "Image" ? "font-bold" : "font-medium"
              }`}
            >
              Images
            </p>
            <p
              className={`text-xl font-bold ${
                selectedCard === "Image" ? "text-[#002f14]" : "text-[#004b23]"
              }`}
            >
              {imageCount}
            </p>
          </div>
        </div>

        <div
          onClick={()=> clickHandler("File")}
          className={`cursor-pointer w-1/2 rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border ${
            selectedCard === "File"
              ? "bg-gradient-to-br from-[#6bb6d8] to-[#5a9fb8] border-[#5a9fb8]"
              : "bg-gradient-to-br from-[#a8dadc] to-[#87ceeb] border-[#87ceeb]"
          }`}
        >
          <div className="flex flex-col items-center gap-1">
            <i className="bi bi-file-earmark text-2xl text-[#014f86]" />
            <p
              className={`text-[10px] uppercase ${
                selectedCard === "File" ? "font-bold" : "font-medium"
              }`}
            >
              Files
            </p>
            <p
              className={`text-xl font-bold ${
                selectedCard === "File" ? "text-[#013555]" : "text-[#014f86]"
              }`}
            >
              {fileCount}
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div>
            {files.map((item , index) => (
                <div key={index} className="flex items-center gap-2 mt-4 p-2 border rounded-lg shadow-sm">
                    {selectedCard === "Image" ? (
                        <ImagePresentation imageKey={`Chat/${item.fileURL}`} imgCss="w-16 h-16 rounded-md object-cover"/>
                    ) : (
                        <i className="bi bi-file-earmark text-3xl text-gray-600"/>
                    )}
                    <div>
                        <p className="text-sm font-medium text-gray-800">{item.senderName}</p>
                        <p className="text-xs text-gray-500">{moment(item.createdAt).format("DD/MM/YYYY HH:MM")}</p>
                    </div>
                </div>
            )
            )}
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
