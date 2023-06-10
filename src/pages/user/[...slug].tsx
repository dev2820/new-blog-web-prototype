import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { useRouter } from "next/router";
import { useNotion } from "@/stores/notion";
import axios from "axios";
import Link from "next/link";
import { ENV } from "@/constants";
import { newBlogAPI } from "@/utils";
import Layout from "@/layouts/Layout";
import Post from "@/components/Post";
import { isNil } from "@/utils";

export default function UserPage(props: any) {
  const { query = {}, route, asPath } = useRouter();
  const temp = useRouter();
  const [posts, setPosts] = useState<any>([]);
  const { slug: _slug } = query;
  const slug = isNil(_slug) ? [] : (_slug as Array<string>);
  const username = String(slug[0]);

  console.log(props);
  const handleLinkNotion = async () => {
    localStorage.setItem("prevUrl", asPath);
    window.location.assign(`api/link/notion`);
  };

  if (!slug || slug.length < 1) {
    return <Layout>wrong</Layout>;
  }

  if (slug.length >= 2) {
    return <Post author={username} title={String(slug[1])} />;
  }

  return (
    <Layout>
      <h1>here is user page for {username || "???"}</h1>
      <a onClick={handleLinkNotion}>
        <button>link notion</button>
      </a>
      <Link href={`/document/unpublished`}>go to unpublished docs</Link>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            <PostSummary post={post}></PostSummary>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

const PostSummary = ({ post }: { post: any }) => {
  const title = post.properties.title.title[0].text.content;

  return <div>{title}</div>;
};

export async function getServerSideProps({ query }: any) {
  const fetchPost = async ({
    author,
    title,
  }: {
    author: string;
    title: string;
  }) => {
    // const { data: post } = await newBlogAPI.get<Post>(
    //   `/post/@${author}/${title}`
    // );
    const { data: post } = await axios.get<Post>(
      `/api/post/@${author}/${title}`
    );
    return post;
  };

  const { slug: _slug } = query;
  const slug = isNil(_slug) ? [] : (_slug as Array<string>);

  if (!slug || slug.length < 1) {
    return {
      props: {
        isPost: null,
      },
    };
  }

  if (slug.length >= 2) {
    const author = String(slug[0]);
    const title = String(slug[1]);
    console.log(author, title);
    const post = await fetchPost({ author, title });

    return {
      props: {
        isPost: true,
        post,
      },
    };
  }

  return {
    props: {
      isPost: false,
    },
  };
}
