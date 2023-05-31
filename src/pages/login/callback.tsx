import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";

export default function CallbackPage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    const { username, avator, token } = router.query;
    user.setProfile({
      name: username as string,
      avator: avator as string,
    });
    sessionStorage.setItem("new-blog-token", String(token));
    const prevUrl = localStorage.getItem("prevUrl");

    if (prevUrl) {
      router.replace(prevUrl);
    }
  }, [router, user]);

  return <p>wait...</p>;
}
