import { useRouter } from "next/router";
import { useUser } from "@/stores/user";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const { isAuthenticated, requestLogin } = useUser();

  useEffect(() => {
    console.log(router);
  }, []);

  return <p>wait...</p>;
}
