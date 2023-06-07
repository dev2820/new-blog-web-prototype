import { newBlogAPI } from "@/utils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import Image from "next/image";

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
      <h2>{getTitle(pageMeta)}</h2>
      <button>publish</button>
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
  const type = block.type;
  if (type === "bookmark") {
    return <a href={block[type].url}>{`[${type}] ${block[type].url}`}</a>;
  }
  if (type === "paragraph") {
    return (
      <p>
        {block[type].rich_text.map((text: any, index: number) => (
          <span key={index}>{text.text.content}</span>
        ))}
      </p>
    );
  }
  if (type === "heading_2") {
    return (
      <h2>
        {block[type].rich_text.map((text: any, index: number) => (
          <span key={index}>{text.text.content}</span>
        ))}
      </h2>
    );
  }
  if (type === "heading_3") {
    <h3>
      {`[${type}]`}
      {block[type].rich_text.map((text: any, index: number) => (
        <span key={index}>{text.text.content}</span>
      ))}
    </h3>;
  }
  if (type === "image") {
    return <img src={block[type].file.url}></img>;
  }
  if (type === "bulleted_list_item") {
    const text = block[type].rich_text.map((text: any, index: number) => (
      <span key={index}>{text.text.content}</span>
    ));
    return (
      <li>
        {`[${type}]`}
        {text}
      </li>
    );
  }
};
