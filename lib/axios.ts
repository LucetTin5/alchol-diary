import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.125.95.255",
});

export default axiosInstance;
