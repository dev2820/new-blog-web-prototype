import { Client } from "@notionhq/client";

export const getPageList = async (accessToken: string) => {
  const notion = new Client({ auth: accessToken });
  const page = await notion.search({
    query: "",
    filter: {
      value: "page",
      property: "object",
    },
  });
  return page;
};

export const getPageMeta = async (pageId: string, accessToken: string) => {
  const notion = new Client({ auth: accessToken });
  const page = await notion.pages.retrieve({ page_id: pageId });
  return page;
};

export const getPageContent = async (pageId: string, accessToken: string) => {
  const notion = new Client({ auth: accessToken });
  const { results } = await notion.blocks.children.list({ block_id: pageId });

  return results;
};
