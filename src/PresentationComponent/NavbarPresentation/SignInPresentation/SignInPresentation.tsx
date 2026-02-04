import React, { useEffect } from "react";
import ISignInPresentation from "./ISignInPresentation";
import { useSelector } from "react-redux";
import UserDetailsType from "../../../Types/Redux/UserDetailsType";
import useCommonAction from "../../../Services/Hooks/useCommonAction";

const SignInPresentation: React.FC<ISignInPresentation> = () => {
  const { userName, userProfileImage } = useSelector(
    (state: any) => state.userDetails as UserDetailsType
  );
  const { getImages } = useCommonAction();
  const [url, setUrl] = React.useState<string | null>(null);

  useEffect(() => {
    if (userProfileImage) {
      getImages(userProfileImage).then((res) => {
        if (res.success && res.data) {
          setUrl(res.data);
        }
      });
    }
  }, []);

  return (
    <div className="flex justify-end w-1/2">
      <div>
        <p className="m-0 text-center items-center flex h-12 mx-2 font-medium text-[#343a40] text-shadow-sm">{userName}</p>
      </div>
      <div className="flex justify-center items-center">
        {url ? (
          <img
            src={url}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-gray-300"
          />
        ) : (
          <p>No Image</p>
        )}
      </div>
    </div>
  );
};

export default SignInPresentation;
