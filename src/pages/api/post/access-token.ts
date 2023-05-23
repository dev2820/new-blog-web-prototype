import { ENV } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function accessTokenAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.body;
  const encoded = btoa(`${ENV.OAUTH_CLIENT_ID}:${ENV.OAUTH_CLIENT_SECRET}`);

  try {
    const response = await axios.post(
      "https://api.notion.com/v1/oauth/token",
      {
        grant_type: "authorization_code",
        code,
        // redirect_uri: "https://new-blog-web-prototype.vercel.app/auth-redirect",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${encoded}`,
        },
      }
    );
    console.log(response);
    res.status(200).json({ test: code, test2: "a" });
  } catch (err) {
    console.log("goto err?");
    console.log(err);
    res.status(400).json(err);
  }
}
