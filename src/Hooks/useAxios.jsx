import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://bistro-boss-server-gray-tau.vercel.app",
  withCredentials: true,
});
const useAxios = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
 
  useEffect(() => {
    axiosInstance.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access_token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // intercepts 401 and 403 status
    axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        const status = error.response.status;

        if (status === 401 || status === 403) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);
  return axiosInstance;
};

export default useAxios;
