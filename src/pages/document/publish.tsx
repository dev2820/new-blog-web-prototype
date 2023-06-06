import { newBlogAPI } from "@/utils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Card from "@/components/Card";
import { useRouter } from "next/router";

export default function PublishPage() {
  const { query } = useRouter();
  const [pageMeta, setPageMeta] = useState<any>({});
  const [pageBlocks, setPageBlocks] = useState<any>([]);
  useEffect(() => {
    const { provider, id } = query;
    fetchDocument(String(provider), String(id), setPageMeta, setPageBlocks);
  }, [query]);

  return (
    <>
      <h2>publish - {getTitle(pageMeta)}</h2>
      <article>{pageBlocks.map((block: any) => getElement(block))}</article>
    </>
  );
}

async function fetchDocument(
  provider: string,
  id: string,
  setPageMeta: Dispatch<SetStateAction<{}>>,
  setPageBlocks: Dispatch<SetStateAction<{}>>
) {
  const { data } = await newBlogAPI.get(`/user/document/${provider}/${id}`);
  const { meta, content } = data;
  setPageMeta(meta);
  setPageBlocks(content);
}

const getTitle = (meta: any) => {
  if (!meta.properties) return "";
  return meta.properties.title.title[0].text.content;
};

const getElement = (block: any) => {
  console.log(block);
  return <Card>wait</Card>;
};
