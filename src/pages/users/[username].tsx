import React from "react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";

export default async function UserPage() {
  const { query = {} } = useRouter();
  const posts = await API.get("post", "/post", {});
  console.log(posts);
  return (
    <div>
      <h1>here is user page for {query.username || "???"}</h1>
    </div>
  );
}
