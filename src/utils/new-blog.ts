import axios, { HttpStatusCode } from "axios";

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
    console.log("im in request");
    return Promise.reject(error);
  }
);

newBlogAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("im in response");
    if (error.response.status === HttpStatusCode.Unauthorized) {
      const res = await newBlogAPI.get("/auth/refresh");
      console.log(res);
    }
    if (error.response.status === HttpStatusCode.Forbidden) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
