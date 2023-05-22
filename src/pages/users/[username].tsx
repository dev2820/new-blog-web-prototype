import React from "react";
// import { Amplify, API } from "aws-amplify";
import { useRouter } from "next/router";

export default function UserPage() {
  const { query = {} } = useRouter();
  // const posts = await API.get("post", "/post");
  return (
    <div>
      <h1>here is user page for {query.username || "???"}</h1>
    </div>
  );
}
