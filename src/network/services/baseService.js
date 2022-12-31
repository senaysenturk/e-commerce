import axios from "axios";

export const baseService = {};

baseService.post = async (url, endpoint, data) => {
  try {
    const response = await axios.post(`${url}${endpoint}`, data, {});
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

baseService.delede = async (url, endpoint, id) => {
  try {
    const response = await axios.delete(`${url}${endpoint}${id}`);
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.postImage = async (url, data) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "*",
      },
    });
    return response;
  } catch (error) {
    console.log(error.status);
  }
};
/*
axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);

    const allowedOrigins = ["http://localhost:5500/"];
    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
*/
baseService.postAuth = async (url, endpoint, data) => {
  try {
    const response = await axios.post(
      `${url}${endpoint}`,
      JSON.stringify({ data }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.postLogout = async (url, endpoint) => {
  try {
    const response = await axios.post(`${url}${endpoint}`, {
      refresh_token: localStorage.getItem("refresh-token"),
    });
    return response;
  } catch (error) {
    console.log(error.status);
  }
};
