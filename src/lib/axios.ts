import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE,
});

export default axiosInstance;
