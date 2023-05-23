import { ENV } from "@/constants";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function accessTokenAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req);
  // const code = req.param.code;
  // const encoded = Buffer.from(
  //   `${ENV.OAUTH_CLIENT_ID}:${ENV.OAUTH_CLIENT_SECRET}`
  // ).toString("base64");
  // const response = await axios.post("https://api.notion.com/v1/oauth/token", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: `Basic ${encoded}`,
  //   },
  //   body: {
  //     grant_type: "authorization_code",
  //     code,
  //     redirect_uri: "/auth-redirect",
  //   },
  // });

  // return response.data;

  return "a";
}
