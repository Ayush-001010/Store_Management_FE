import React, { useEffect, useState } from "react";
import ISuggestedUserDetails from "./ISuggestedUserDetails";
import useCommonAction from "../../../Services/Hooks/useCommonAction";

const SuggestedUserDetails: React.FC<ISuggestedUserDetails> = ({ imageKey, name, id , addSelectedUser }) => {
  const { getImages } = useCommonAction();
  const [imageURL, setImageURL] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    getImages(imageKey)
      .then((res) => {
        setImageURL(res.data || "");
      })
      .catch((err) => {
        console.error("Error fetching image URL:", err);
        setImageURL("https://i.pravatar.cc/150?img=1"); // Fallback image
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [imageKey]);

  return (
    <div onClick={()=>addSelectedUser({id , name , imageKey})} className="group flex items-center gap-4 px-4 py-3 hover:bg-gradient-to-r hover:from-[#023e8a] hover:from-0% hover:via-[#0466c8] hover:via-50% hover:to-[#023e8a] hover:to-100% hover:bg-opacity-10 transition-all duration-200 cursor-pointer border-b border-gray-100 last:border-b-0 hover:border-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#023e8a] to-transparent opacity-0 group-hover:opacity-5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

      <div className="relative flex-shrink-0">
        {isLoading ? (
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
        ) : (
          <>
            <img
              src={imageURL}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#023e8a] transition-all shadow-sm group-hover:shadow-md group-hover:scale-105 transform duration-200"
            />
            {/* Online Indicator (Optional) */}
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </>
        )}
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#023e8a] transition-colors truncate">
          {name}
        </p>
        <p className="text-xs text-gray-500 group-hover:text-[#0466c8] transition-colors truncate">
          {id}
        </p>
      </div>

      {/* Add Icon */}
      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-8 h-8 rounded-full bg-[#023e8a] flex items-center justify-center shadow-md">
          <i className="bi bi-plus-lg text-white text-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default SuggestedUserDetails;