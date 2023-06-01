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
      console.log(authorization);
      return axios.request(config);
    }
    // if (error.response.status === HttpStatusCode.Forbidden) {
    //   window.location.href = "/login";
    // }

    return Promise.reject(error);
  }
);
