import APIServices from "../API_Call/APIServices";

const useCommonAction = () => {
  const getImages = async (
    key: string
  ): Promise<{ success: boolean; data?: string | null }> => {
    try {
      return APIServices.postAPIRequest("/user/userImage", { key });
    } catch (error) {
      console.log("Error  ", error);
      return { success: false, data: null };
    }
  };

  return { getImages };
};

export default useCommonAction;
