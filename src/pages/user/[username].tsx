import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ENV } from "@/constants";

export default function UserPage() {
  const { query = {} } = useRouter();
  const [posts, setPosts] = useState<any>([]);
  const username = query.username;
  const code = query.code;
  console.log(code);

  useEffect(() => {
    console.log("effect!");
    const updatePosts = async () => {
      const _posts = await fetchPosts(username as string);
      setPosts(_posts);
    };

    updatePosts();
  }, [username]);

  return (
    <div>
      <h1>here is user page for {username || "???"}</h1>
      <a href={ENV.NOTION_AUTH_URL}>notion auth</a>
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

async function fetchPosts(username: string) {
  try {
    const { data } = await axios.get(`/api/post/${username}`);
    return data;
  } catch {
    return [];
  }
}

const PostSummary = ({ post }: { post: any }) => {
  const title = post.properties.title.title[0].text.content;

  return <div>{title}</div>;
};
