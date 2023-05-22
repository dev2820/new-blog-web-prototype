import { NextApiRequest, NextApiResponse } from "next";
import { notion } from "@/utils";

export default async function postAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username } = req.query;
    const { results } = await notion.getPageList(username as string);

    res.status(200).json(results);
  } catch {
    res.status(400).end("wrong request");
  }
}
