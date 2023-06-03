import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useNotion } from "@/stores/notion";
import axios from "axios";
import { ENV } from "@/constants";
import { newBlogAPI } from "@/utils";

export default function UserPage() {
  const { query = {} } = useRouter();
  const notion = useNotion();
  const [posts, setPosts] = useState<any>([]);
  const username = query.username;

  const handleLinkNotion = async () => {
    window.location.assign(`api/link/notion`);
  };
  // useEffect(() => {
  //   const updatePosts = async () => {
  //     const _posts = await fetchPosts(username as string, notion.accessToken);
  //     setPosts(_posts);
  //   };

  //   updatePosts();
  // }, [notion.accessToken, username]);

  return (
    <div>
      <h1>here is user page for {username || "???"}</h1>
      <a onClick={handleLinkNotion}>
        <button>link notion</button>
      </a>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            <PostSummary post={post}></PostSummary>
          </li>
        ))}
      </ul>
    </div>
  );
}
async function fetchPosts(username: string, accessToken: string) {
  try {
    const { data } = await axios.post(`/api/post/${username}`, {
      accessToken,
    });
    return data;
  } catch {
    return [];
  }
}

const PostSummary = ({ post }: { post: any }) => {
  const title = post.properties.title.title[0].text.content;

  return <div>{title}</div>;
};
