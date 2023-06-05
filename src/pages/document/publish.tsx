import { newBlogAPI } from "@/utils";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PublishPage() {
  const { query } = useRouter();
  useEffect(() => {
    const { provider, id } = query;
    fetchDocument(String(provider), String(id));
  }, [query]);

  return (
    <>
      <h2>publish</h2>
      <article></article>
    </>
  );
}

async function fetchDocument(provider: string, id: string) {
  const doc = await newBlogAPI.get(`/user/document/${provider}/${id}`);
  console.log(doc);
}
