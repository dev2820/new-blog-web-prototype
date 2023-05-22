import React from "react";
import { useRouter } from "next/router";

export default function UserPage() {
  const { query = {} } = useRouter();
  return (
    <div>
      <h1>here is user page for {query.username || "???"}</h1>
    </div>
  );
}
