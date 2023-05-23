import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { useNotion } from "@/stores/notion";
import { useUser } from "@/stores/user";
export default function AuthRedirectPage() {
  const user = useUser();
  const router = useRouter();
  const notion = useNotion();
  const code = router.query.code as string;

  notion.setCode(code);
  redirect(`/@${user.profile.name}`);
}
