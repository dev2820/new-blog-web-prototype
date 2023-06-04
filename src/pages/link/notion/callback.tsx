/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import { useUser } from "@/stores/user";
import { newBlogAPI } from "@/utils";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    /**
     * code를 전송해 등록하게 만든다.
     */
    const { code } = router.query;
    console.log(code);
    if (!code) return;
    registCode(String(code), router);
  }, [router.query]);

  return <p>let me do it for you...</p>;
}

const registCode = async (code: string, router: NextRouter) => {
  console.log(code);
  await newBlogAPI.post("/link/notion/regist-code", { code });
  const prevUrl = sessionStorage.getItem("prevUrl");

  if (prevUrl) {
    router.replace(prevUrl);
    sessionStorage.setItem("prevUrl", "");
  }
};
