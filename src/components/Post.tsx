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

type Post = { meta: any; contents: any[] };

const Post: React.FC<Props> = (props) => {
  const { author, title } = props;
  const [post, setPost] = useState<Post>({
    meta: {},
    contents: [],
  });

  useEffect(() => {
    fetchPost({ author, title, setPost });
  }, []);
  return (
    <Layout>
      <h1>{title}</h1>
      <Link href={`/@${author}`}>{author}</Link>
      <article>{post.contents.map((block: any) => getElement(block))}</article>
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

const getElement = (block: any) => {
  const type = block.type;
  if (type === "bookmark") {
    return (
      <a href={block.url}>
        <p>{block.url}</p>
      </a>
    );
  }
  if (type === "paragraph") {
    return <p>{convertRichText(block.richText)}</p>;
  }
  if (type === "heading_2") {
    return <h2>{convertRichText(block.richText)}</h2>;
  }
  if (type === "heading_3") {
    return <h3>{convertRichText(block.richText)}</h3>;
  }
  if (type === "image") {
    return <img src={block.url}></img>;
  }
  if (type === "bulleted_list_item") {
    return <li>{convertRichText(block.richText)}</li>;
  }
  if (type === "quote") {
    <blockquote>{convertRichText(block.richText)}</blockquote>;
  }
};

const convertRichText = (richText: any) => {
  return richText.map((text: any, index: number) => {
    if (!!text.href) {
      return (
        <a key={index} href={text.href}>
          {text.text.content}
        </a>
      );
    }
    return <span key={index}>{text.text.content}</span>;
  });
};
