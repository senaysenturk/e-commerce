import axios from "axios";

export const baseService = {};

baseService.post = async (url, endpoint, data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${url}${endpoint}`,
      data: data,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.get = async (url, endpoint) => {
  try {
    const response = await axios.get(`${url}${endpoint}`);
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.postImage = async (url, data) => {
  try {
    const response = await axios({
      method: "post",
      url: url,
      body: data,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    console.log(error.status);
  }
};
