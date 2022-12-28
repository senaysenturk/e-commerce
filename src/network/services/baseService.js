import axios from "axios";

export const baseService = {};

baseService.post = async (url, endpoint, data) => {
  try {
    const response = await axios.post(`${url}${endpoint}`, data);
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
    console.log(error);
  }
};
