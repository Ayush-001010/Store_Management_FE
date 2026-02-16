import React, { useEffect, useMemo, useState } from "react";
import IUserProfile from "./IUserProfile";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../../Types/Redux/UserDetailsType";
import useCommonAction from "../../../../Services/Hooks/useCommonAction";
import ChatConfig from "../../../../Config/ChatConfig";

const UserProfile : React.FC<IUserProfile> = () => {
    const {userName , userProfileImage} = useSelector((state : any) => state.userDetails as UserDetailsType);
    const [profileImage , setProfileImage] = useState<string>("");
    const [value , setValue] = useState<"Available" | "Not Available"| "On Leave"  | "On Vacation"|"Busy">("Available");
    const { getImages } = useCommonAction();

    useEffect(()=>{
        getImages(userProfileImage|| "").then((res) => {
            const {data} = res;
            setProfileImage(data || "");
        });
    },[]);

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value as "Available" | "Not Available"| "On Leave"  | "On Vacation"|"Busy");
    }

    const cssStyle = useMemo(() => {
        switch(value){
            case "Available" : return "text-[#588157] bg-[#74c69d]";
            case "Not Available" : return "text-[#d00000] bg-[#ff6b6b]";
            case "On Leave" : return "text-[#f4a261] bg-[#e9c46a]";
            case "On Vacation" : return "text-[#2a9d8f] bg-[#48bfe3]";
            case "Busy" : return "text-[#6a040f] bg-[#9d0208]";
            default : return "";
        }
    },[value]);


    return (
        <div>
            <div  className="flex justify-center items-center my-1">
                <img src={profileImage} alt="Profile Image" className="w-36 h-36 rounded-full object-cover shadow-xs border-2 border-gray-300" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-[#343a40] text-center text-xl font-semibold text-shadow-lg m-0">{userName}</p>
                <select className={`w-1/2 border h-10 rounded-lg  text-center font-semibold ${cssStyle}`} value={value} onChange={handleChange}>
                {ChatConfig.userStatusOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            </div>
            
        </div>
    )
};

export default UserProfile;