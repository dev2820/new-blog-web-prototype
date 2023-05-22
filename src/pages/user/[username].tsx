import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function UserPage() {
  const { query = {} } = useRouter();
  const [posts, setPosts] = useState<any>([]);
  const username = query.username;

  useEffect(() => {
    const updatePosts = async () => {
      const _posts = await fetchPosts(username as string);
      setPosts(_posts);
    };

    updatePosts();
  });

  return (
    <div>
      <h1>here is user page for {username || "???"}</h1>
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
  const { data } = await axios.get(`/api/post/${username}`);

  return data;
}

const PostSummary = ({ post }: { post: any }) => {
  const title = post.properties.title.title[0].text.content;

  return <div>{title}</div>;
};
