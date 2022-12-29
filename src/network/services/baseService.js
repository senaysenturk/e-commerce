import axios from "axios";

export const baseService = {};

baseService.post = async (url, endpoint, data) => {
  try {
    const response = await axios.post(`${url}${endpoint}`, data, {
      headers: {
        "Content-Type": "application/form-data",
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
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  } catch (error) {
    console.log(error.status);
  }
};
