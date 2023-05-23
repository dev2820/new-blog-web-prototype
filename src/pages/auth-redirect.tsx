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
      const { data } = await axios.post("/api/post/access-token", {
        code,
      });
      console.log(data);
    };

    updateAccessToken();
  }, [router]);

  // if (code) {
  //   notion.setCode(code);
  //   router.push(`/@dev2820`);
  // }

  return <h1>loading...</h1>;
}
