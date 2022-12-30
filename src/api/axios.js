import axios from "axios";
const BASE_URL = "http://192.168.1.6:5500";

export default axios.create({
  baseURL: BASE_URL,
});
