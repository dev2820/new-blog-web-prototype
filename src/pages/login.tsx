import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";
import { newBlogAPI } from "@/utils/new-blog";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, requestLogin } = useUser();

  const handleLogin = async () => {
    try {
      const response = await newBlogAPI("/auth/google");
      const { url } = await response.data;
      window.location.href = url;
    } catch (err) {
      console.error("Error!", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  });

  return (
    <>
      <h1>login</h1>
      <button onClick={requestLogin}>login</button>
      <button onClick={handleLogin}>google oauth</button>
    </>
  );
}
