import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";
import { ENV } from "@/constants";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, requestLogin } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  });

  return (
    <>
      <h1>login</h1>
      <button onClick={requestLogin}>login</button>
      <a href={ENV.GOOGLE_OAUTH_URL}>google oauth</a>
    </>
  );
}
