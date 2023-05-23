import { ENV } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function accessTokenAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.body;
  const encoded = Buffer.from(
    `${ENV.OAUTH_CLIENT_ID}:${ENV.OAUTH_CLIENT_SECRET}`
  ).toString("base64");

  try {
    const response = await axios.post(
      "https://api.notion.com/v1/oauth/token",
      {
        grant_type: "authorization_code",
        code,
        redirect_uri: "/auth-redirect",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encoded}`,
        },
      }
    );

    res.status(200).json({ accessToken: response.data.access_token });
  } catch (err) {
    res.status(400).json(err);
  }
}
