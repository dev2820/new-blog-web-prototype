/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";

export default function CallbackPage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    const { token } = router.query;
    localStorage.setItem("new-blog-token", String(token));

    user.fetchProfile();
    const prevUrl = localStorage.getItem("prevUrl");

    if (prevUrl) {
      router.replace(prevUrl);
      localStorage.setItem("prevUrl", "");
    }
  }, [router.query]);

  return <p>wait...</p>;
}
