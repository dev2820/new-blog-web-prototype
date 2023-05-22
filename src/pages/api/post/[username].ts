import { NextApiRequest, NextApiResponse } from "next";
import { GET, POST, PUT, DELETE } from "@/constants";
import { notion } from "@/utils";

export default function postAPI(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === GET) getPostAPI(req, res);
  else res.status(400).send("wrong request");
}

const getPostAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username } = req.query;

  const { results } = await notion.getPageList(username as string);
  res.status(200).json({ posts: results });
};
