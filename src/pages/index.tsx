import Link from "next/link";
import { useUser } from "@/stores/user";
import Layout from "@/layouts/Layout";
import { newBlogAPI } from "@/utils";

export default function HomePage() {
  const user = useUser();

  return (
    <Layout>
      <h1>Home</h1>
      {user.profile.name && (
        <Link href={`/@${user.profile.name}`}>go to user page</Link>
      )}
    </Layout>
  );
}
