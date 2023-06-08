import Layout from "@/layouts/Layout";
import { newBlogAPI } from "@/utils";
import Link from "next/link";
import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Props extends PropsWithChildren {
  author: string;
  title: string;
}

type Post = { meta: any; contents: any };

const Post: React.FC<Props> = (props) => {
  const { author, title } = props;
  const [post, setPost] = useState<Post>({
    meta: {},
    contents: {},
  });

  useEffect(() => {
    fetchPost({ author, title, setPost });
  }, []);
  return (
    <Layout>
      <h1>{title}</h1>
      <Link href={`/@${author}`}>{author}</Link>
      {}
    </Layout>
  );
};

export default Post;

const fetchPost = async ({
  author,
  title,
  setPost,
}: {
  author: string;
  title: string;
  setPost: Dispatch<SetStateAction<Post>>;
}) => {
  const { data: post } = await newBlogAPI.get<Post>(
    `/post/@${author}/${title}`
  );
  setPost(post);
};
