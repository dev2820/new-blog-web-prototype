import axios from "axios";

export const newBlogAPI = axios.create({
  baseURL: "/api",
});
