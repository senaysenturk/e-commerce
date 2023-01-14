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

baseService.getWithParams = async (url) => {
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.getById = async (url, endpoint, id) => {
  try {
    const response = await axios.get(`${url}${endpoint}${id}`);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.delete = async (url, endpoint, id) => {
  try {
    const response = await axios.delete(`${url}${endpoint}${id}`);
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.patch = async (url, endpoint, id, data) => {
  try {
    const response = await axios.patch(`${url}${endpoint}${id}`, data, {});
    return response;
  } catch (error) {
    console.log(error.status);
  }
};

baseService.postImage = async (url, data, onUploadProgress) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "*",
      },
      onUploadProgress,
    });
    console.log(response);
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
    const response = await axios.post(`${url}${endpoint}`, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error.status);
  }
};
/* 
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
 */

/**
 *
 *
 * @param {OrderProduct} orderData
 */
baseService.sendOrderItems = async (orderData) => {
  const orderUrl = `http://localhost:5500/order-list`;

  await axios.post(orderUrl, orderData);
};
/**
 *
 * @param {AuthUser["id"]} userId
 * @returns {Promise<OrderProduct[]>}
 */

baseService.getAllOrderItems = async (userId) => {
  const getOrdersUrl = `http://localhost:5500/order-list`;
  const result = await axios.get(getOrdersUrl);
  console.log("RESULT :", result);
  return result.data;
};
baseService.getOrderItemsByUserId = async (userId) => {
  const getOrdersUrl = `http://localhost:5500/order-list?userId=${userId}`;

  const result = await axios.get(getOrdersUrl);
  // console.log("RESULT :", result);
  return result.data;
};
