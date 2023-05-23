import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useNotion } from "@/stores/notion";
import { ENV } from "@/constants";
import axios from "axios";
// import { useUser } from "@/stores/user";
export default function AuthRedirectPage() {
  // const user = useUser();
  const router = useRouter();
  const notion = useNotion();
  const [code] = useState(router.query.code as string);

  useEffect(() => {
    const updateAccessToken = async () => {
      const token = await getAccessToken(code);
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

async function getAccessToken(code: string) {
  const encoded = Buffer.from(
    `${ENV.OAUTH_CLIENT_ID}:${ENV.OAUTH_CLIENT_SECRET}`
  ).toString("base64");
  const response = await axios.post("https://api.notion.com/v1/oauth/token", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${encoded}`,
    },
    body: {
      grant_type: "authorization_code",
      code,
      redirect_uri: "/@dev2820",
    },
  });

  return response.data;
}
