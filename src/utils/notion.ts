import { Client } from "@notionhq/client";

const NOTION_API_KEY = process.env.NEXT_PUBLIC_NOTION_API_KEY;
console.log("key", NOTION_API_KEY);
const notion = new Client({ auth: NOTION_API_KEY });

export const getPageList = async (username: string) => {
  const page = await notion.search({
    query: "",
    filter: {
      value: "page",
      property: "object",
    },
  });
  return page;
};

export const getPageMeta = async (pageId: string) => {
  const page = await notion.pages.retrieve({ page_id: pageId });
  return page;
};

export const getPageContent = async (pageId: string) => {
  const { results } = await notion.blocks.children.list({ block_id: pageId });

  return results;
};
