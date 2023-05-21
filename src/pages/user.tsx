import React from "react";
import { GetServerSidePropsContext, GetServerSideProps } from "next";

interface PageProps {
  username: string;
}

export default function UserPage({ username }: PageProps) {
  return (
    <div>
      <h1>here is user page for {username}</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx: GetServerSidePropsContext
) => {
  const { query } = ctx;
  const { username } = query;

  return {
    props: { username: (username as string) || "" },
  };
};
