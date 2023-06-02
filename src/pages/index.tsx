import Link from "next/link";
import { useUser } from "@/stores/user";
import Layout from "@/layouts/Layout";
import { newBlogAPI } from "@/utils";

export default function HomePage() {
  const testFunc = async () => {
    try {
      const response = await newBlogAPI.get("https://new-blog.store/api/user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h1>Home</h1>
      <button onClick={testFunc}>work if authorized</button>
    </Layout>
  );
}
