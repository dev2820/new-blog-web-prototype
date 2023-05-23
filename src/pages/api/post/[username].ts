import { NextApiRequest, NextApiResponse } from "next";
import { notion } from "@/utils";

export default async function postAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { accessToken } = req.body;
    const { results } = await notion.getPageList(accessToken);

    res.status(200).json(results);
  } catch {
    res.status(400).end("wrong request");
  }
}
