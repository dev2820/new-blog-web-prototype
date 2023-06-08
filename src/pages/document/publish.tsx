import { newBlogAPI } from "@/utils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import { useUser } from "@/stores/user";
import Image from "next/image";
import Layout from "@/layouts/Layout";

export default function PublishPage() {
  const router = useRouter();
  const user = useUser();
  const [pageMeta, setPageMeta] = useState<any>({});
  const [pageBlocks, setPageBlocks] = useState<any>([]);
  useEffect(() => {
    const { provider, id } = router.query;
    fetchDocument(String(provider), String(id), setPageMeta, setPageBlocks);
  }, [router.query]);

  const handlePublish = async () => {
    const { provider, id } = router.query;

    await newBlogAPI.post("/user/document/publish", {
      provider,
      pageId: id,
    });

    router.push(`/@${user.profile.name}/${getTitle(pageMeta)}`);
  };

  return (
    <Layout>
      <h1>{getTitle(pageMeta)}</h1>
      <button onClick={handlePublish}>publish</button>
      <article>{pageBlocks.map((block: any) => getElement(block))}</article>
    </Layout>
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
    return (
      <a href={block.url}>
        <p>{block.url}</p>
      </a>
    );
  }
  if (type === "paragraph") {
    return <p>{convertRichText(block.richText)}</p>;
  }
  if (type === "heading_2") {
    return <h2>{convertRichText(block.richText)}</h2>;
  }
  if (type === "heading_3") {
    return <h3>{convertRichText(block.richText)}</h3>;
  }
  if (type === "image") {
    return <img src={block.url}></img>;
  }
  if (type === "bulleted_list_item") {
    return <li>{convertRichText(block.richText)}</li>;
  }
  if (type === "quote") {
    <blockquote>{convertRichText(block.richText)}</blockquote>;
  }
};

const convertRichText = (richText: any) => {
  return richText.map((text: any, index: number) => {
    if (!!text.href) {
      return (
        <a key={index} href={text.href}>
          {text.text.content}
        </a>
      );
    }
    return <span key={index}>{text.text.content}</span>;
  });
};
