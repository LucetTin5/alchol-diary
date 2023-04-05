import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.AXIOS_BASE,
});

export default axiosInstance;
