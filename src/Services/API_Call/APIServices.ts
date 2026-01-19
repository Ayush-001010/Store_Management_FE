import axios from "axios";

export default class APIServices {
  static postAPIRequest = async (url: string, data?: any): Promise<{success : boolean , data : any}> => {
    try {
      const response = await axios.post("http://localhost:8000" + url, data);
      return response.data;
    } catch (error) {
      console.error("Error in POST API Request:", error);
      throw error;
    }
  };
}
