/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";

export default function CallbackPage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    const { username, avator, token } = router.query;
    console.log(token);
    user.setProfile({
      name: String(username),
      avator: String(avator),
    });
    sessionStorage.setItem("new-blog-token", String(token));
    const prevUrl = sessionStorage.getItem("prevUrl");

    if (prevUrl) {
      router.replace(prevUrl, undefined, { shallow: true });
    }
  }, [router]);

  return <p>wait...</p>;
}
