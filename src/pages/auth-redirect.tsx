import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useNotion } from "@/stores/notion";
import axios from "axios";

// import { useUser } from "@/stores/user";
export default function AuthRedirectPage() {
  // const user = useUser();
  const router = useRouter();
  const notion = useNotion();
  const [code] = useState(router.query.code as string);

  useEffect(() => {
    const updateAccessToken = async () => {
      const token = await axios.post("/api/post/access-token", {
        params: {
          code,
        },
      });
      console.log(token);
    };

    updateAccessToken();
  }, [code]);

  // if (code) {
  //   notion.setCode(code);
  //   router.push(`/@dev2820`);
  // }

  return <h1>loading...</h1>;
}
