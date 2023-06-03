/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";

export default function CallbackPage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    const { token } = router.query;
    localStorage.setItem("document-token", String(token));

    user.fetchProfile();
    // const prevUrl = sessionStorage.getItem("prevUrl");

    // if (prevUrl) {
    //   router.replace(prevUrl);
    //   sessionStorage.setItem("prevUrl", "");
    // }
  }, [router.query]);

  return <p>let me do it for you...</p>;
}
