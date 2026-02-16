import React, { useEffect, useState } from "react";
import ISelectedUser from "./ISelectedUser";
import useCommonAction from "../../../Services/Hooks/useCommonAction";

const SelectedUser: React.FC<ISelectedUser> = ({ user, removeUser }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRemoving, setIsRemoving] = useState(false);
  const { getImages } = useCommonAction();

  useEffect(() => {
    setIsLoading(true);
    console.log("Fetching image for user:", user);
    getImages(user.imageKey || user.image)
      .then((res) => {
        setImageUrl(res.data || "");
      })
      .catch((err) => {
        console.error("Error fetching image:", err);
        setImageUrl("https://i.pravatar.cc/150?img=1"); // Fallback
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user.image]);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeUser(user.id);
    }, 200); // Match animation duration
  };


  return (
    <div
      className={`
        group relative inline-flex items-center gap-2.5 pl-1.5 pr-3 py-1.5 
        bg-gradient-to-r from-[#023e8a] via-[#0353a4] to-[#0466c8] 
        text-white rounded-full text-sm font-medium 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 ease-out
        hover:scale-105 hover:from-[#0466c8] hover:via-[#0353a4] hover:to-[#023e8a]
        animate-slideIn
        ${isRemoving ? "animate-slideOut opacity-0 scale-75" : ""}
      `}
    >
      {/* Background Glow Effect */}
      <div
        className="absolute -inset-0.5 bg-gradient-to-r from-[#023e8a] to-[#0466c8] 
                      rounded-full opacity-0 group-hover:opacity-60 blur-md 
                      transition-opacity duration-300 -z-10"
      ></div>

      {/* Shine Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                      opacity-0 group-hover:opacity-20 
                      transform -translate-x-full group-hover:translate-x-full 
                      transition-transform duration-700 ease-in-out
                      rounded-full overflow-hidden"
      ></div>

      {/* Avatar Container */}
      <div className="relative flex-shrink-0">
        {isLoading ? (
          <div className="w-7 h-7 rounded-full bg-white bg-opacity-30 animate-pulse"></div>
        ) : (
          <>
            {/* Avatar Glow Ring */}
            <div
              className="absolute -inset-0.5 bg-white rounded-full opacity-0 
                            group-hover:opacity-40 blur-sm transition-opacity duration-300"
            ></div>

            {/* Avatar Image */}
            <img
              src={imageUrl}
              alt={user.name}
              className="relative w-7 h-7 rounded-full object-cover 
                         border-2 border-white shadow-md
                         transition-all duration-300
                         group-hover:scale-110 group-hover:rotate-6"
            />

            {/* Check Icon Overlay on Hover */}
            <div
              className="absolute inset-0 flex items-center justify-center 
                            bg-[#023e8a] bg-opacity-0 group-hover:bg-opacity-70 
                            rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <i className="bi bi-check2 text-white text-xs font-bold"></i>
            </div>
          </>
        )}
      </div>

      {/* User Name */}
      <span
        className="font-semibold tracking-wide select-none 
                       group-hover:tracking-wider transition-all duration-300"
      >
        {user.name}
      </span>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="relative ml-0.5 w-5 h-5 flex items-center justify-center
                   rounded-full transition-all duration-200
                   hover:bg-white hover:bg-opacity-25
                   hover:rotate-90 hover:scale-110
                   active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label={`Remove ${user.name}`}
      >
        <i
          className="bi bi-x text-xl font-bold leading-none 
                      group-hover:text-red-100 transition-colors"
        ></i>

        {/* Hover Tooltip */}
        <span
          className="absolute -top-8 left-1/2 -translate-x-1/2 
                         px-2 py-1 bg-gray-900 text-white text-xs rounded 
                         opacity-0 group-hover:opacity-100 pointer-events-none
                         transition-opacity duration-200 whitespace-nowrap"
        >
          Remove
        </span>
      </button>

      {/* Bottom Highlight */}
      <div
        className="absolute bottom-0 left-1/4 right-1/4 h-px 
                      bg-white opacity-0 group-hover:opacity-40 
                      transition-opacity duration-300"
      ></div>
    </div>
  );
};

export default SelectedUser;
