import { useRouter } from "next/router";
import { useNotion } from "@/stores/notion";
import { useUser } from "@/stores/user";
import { useEffect } from "react";
export default function AuthRedirectPage() {
  const user = useUser();
  const router = useRouter();
  const notion = useNotion();
  const code = router.query.code as string;

  useEffect(() => {
    if (code) {
      notion.setCode(code);
      router.push(`/@${user.profile.name}`);
    }
  }, [code, notion, router, user.profile.name]);

  return <h1>loading...</h1>;
}
