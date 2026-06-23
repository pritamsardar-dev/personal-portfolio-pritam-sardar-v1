import axios from "axios";

const isNetworkAccess =
  window.location.hostname.startsWith("192.168.");

const axiosInstance = axios.create({
  baseURL: isNetworkAccess
    ? import.meta.env.VITE_API_BASE_URL_NETWORK
    : import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export default axiosInstance;