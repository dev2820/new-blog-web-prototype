import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";
import { newBlogAPI } from "@/utils/new-blog";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, requestLogin } = useUser();
  const handleGoogleLogin = () => {
    window.location.assign("api/auth/google");
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
      <button onClick={handleGoogleLogin}>google oauth</button>
    </>
  );
}
