import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useNotion } from "@/stores/notion";
import axios from "axios";
import Link from "next/link";
import { ENV } from "@/constants";
import { newBlogAPI } from "@/utils";
import Layout from "@/layouts/Layout";
import Post from "@/components/Post";

export default function UserPage() {
  const { query = {}, route, asPath } = useRouter();
  const temp = useRouter();
  const [posts, setPosts] = useState<any>([]);
  const { slug: _slug } = query;
  const slug = Array(_slug);
  const username = slug[0];

  const handleLinkNotion = async () => {
    localStorage.setItem("prevUrl", asPath);
    window.location.assign(`api/link/notion`);
  };

  if (!query.slug || query.slug.length < 1) {
    return <Layout>wrong</Layout>;
  }
  if (query.slug.length >= 2) {
    return <Post author={String(slug[0])} title={String(slug[1])} />;
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
