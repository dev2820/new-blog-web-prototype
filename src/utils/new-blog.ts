import axios, { HttpStatusCode } from "axios";
import { MESSAGE } from "@/constants";

export const newBlogAPI = axios.create({
  baseURL: "/api",
});

newBlogAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("new-blog-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

newBlogAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === HttpStatusCode.Unauthorized) {
      const {
        headers: { authorization },
      } = await newBlogAPI.get("/auth/update-token");

      const newToken = authorization.split(" ")[1];
      localStorage.setItem("new-blog-token", newToken);
      config.headers.Authorization = `Bearer ${newToken}`;
      /**
       * 재귀 요청 일어나지 않게 후처리 필요
       */
      return axios.request(config);
    }
    if (status === HttpStatusCode.Forbidden) {
      return Promise.reject(MESSAGE.LOGIN_AGAIN);
    }

    return Promise.reject(error);
  }
);
