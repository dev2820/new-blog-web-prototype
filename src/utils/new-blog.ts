import axios from "axios";
import { ENV } from "@/constants";

export const newBlogAPI = axios.create({
  baseURL: `${ENV.NEW_BLOG_SERVER_URL}/api`,
});
