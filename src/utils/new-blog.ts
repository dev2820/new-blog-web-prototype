import axios from "axios";

export const newBlogAPI = axios.create({
  baseURL: "/api",
});

newBlogAPI.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("new-blog-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
