import Layout from "@/layouts/Layout";
import { newBlogAPI } from "@/utils";
import Link from "next/link";
import React, { PropsWithChildren, useEffect, useState } from "react";

interface Props extends PropsWithChildren {
  author: string;
  title: string;
}

const Post: React.FC<Props> = ({ author, title }) => {
  const [post, setPost] = useState<{ meta: any; contents: any }>({
    meta: {},
    contents: {},
  });
  const [blocks] = useState<any>([]);

  useEffect(() => {
    fetchPost({ author, title });
  }, []);
  return (
    <Layout>
      <h1>{post.meta.title}</h1>
      <Link href={`/@${author}`}>{author}</Link>
      {}
    </Layout>
  );
};

export default Post;

const fetchPost = async ({
  author,
  title,
}: {
  author: string;
  title: string;
}) => {
  const post = await newBlogAPI.get(`/post/@${author}/${title}`);
  console.log(post);
};
