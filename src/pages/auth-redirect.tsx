import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useNotion } from "@/stores/notion";
import axios from "axios";

// import { useUser } from "@/stores/user";
export default function AuthRedirectPage() {
  // const user = useUser();
  const router = useRouter();
  const notion = useNotion();

  useEffect(() => {
    const code = router.query.code;

    if (!code) return;

    const updateAccessToken = async () => {
      console.log("update", code);
      try {
        const { data } = await axios.post("/api/post/access-token", {
          code,
        });

        const { access_token } = data;
        notion.setAccessToken(access_token);
        router.push("/@dev2820");
      } catch (err) {
        console.log(err);
      }
    };

    updateAccessToken();
  }, [notion, router]);

  return <h1>loading...</h1>;
}
