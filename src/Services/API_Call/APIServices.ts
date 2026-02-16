import axios from "axios";

export default class APIServices {
  static postAPIRequest =  async (url: string, data?: any): Promise<{success : boolean , data : any}> => {
    try {
      const response = await axios.post("http://localhost:8000" + url, data);
      return response.data;
    } catch (error) {
      console.error("Error in POST API Request:", error);
      return { success: false, data: null };
    }
  };
  static postAPIForAI =  async (url: string, data?: any): Promise<{success : boolean , data : any}> => {
    try {
      const response = await axios.post("http://127.0.0.1:8000" + url, data , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error in POST API Request:", error);
      return { success: false, data: null };
    }
  };
  static uploadFileToS3 = async (file : File , contentType : string , url : string)=>{
    try {
      console.log("Type   ",contentType);
      const response = await axios.put(url, file, {
          headers: {
              'Content-Type': contentType,
          },
      });
      return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error };
    }
  }
}
