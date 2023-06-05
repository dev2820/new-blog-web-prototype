import { newBlogAPI } from "@/utils";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PublishPage() {
  const { query } = useRouter();

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <>
      <h2>publish</h2>
      <article></article>
    </>
  );
}
