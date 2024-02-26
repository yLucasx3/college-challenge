import axios from "axios";

const baseDomain = "http://localhost:3001";
const baseURL = `${baseDomain}/api`;

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers["Authorization"] = token;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
