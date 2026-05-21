import axios from "axios";
import cogoToast from "cogo-toast";

// Use Railway backend URL or fallback to localhost
const apiBase = import.meta.env.VITE_API_BASE_URL || "https://foodie-production-d900.up.railway.app";

console.log("API Base URL:", apiBase);
console.log("Env VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL);

export const instance = axios.create({
  baseURL: apiBase,
});

instance.interceptors.request.use(
  (config) => {
    let authState = window.sessionStorage.getItem("token");

    config.headers.Authorization = `Bearer ${authState}`;
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.clear();
      cogoToast.warn("Session timed out");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.message === "" || response.data.message === undefined) {
        console.log("");
      } else {
        cogoToast.success(response.data.message);
      }
    }
    return response;
  },
  (error) => {
    if (!error?.response?.data) {
      cogoToast.error("check your internet connection");
      return Promise.reject(error);
    }
    if (error.response.status >= 300) {
      cogoToast.error(
        !!error.response.data.error
          ? error.response.data.error
          : "check your internet connection"
      );
    }
    return Promise.reject(error);
  }
);