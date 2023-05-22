import { NextApiRequest, NextApiResponse } from "next";

export default function fetchPosts(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  res.status(200).json({ message: "Hello from serverless function!" });
}
