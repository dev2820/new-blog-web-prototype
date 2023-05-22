import React from "react";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface PageProps {
  username: string;
}

export default function UserPage({ username }: PageProps) {
  const { query = {} } = useRouter();
  return (
    <div>
      <h1>here is user page for {query.username || "???"}</h1>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps<PageProps> = async (
//   ctx: GetServerSidePropsContext
// ) => {
//   const { query } = ctx;
//   const { username } = query;

//   return {
//     props: { username: (username as string) || "" },
//   };
// };
