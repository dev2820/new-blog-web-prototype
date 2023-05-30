import { useRouter } from "next/router";
import { useUser } from "@/stores/user";
import { useEffect } from "react";

export default function CallbackPage() {
  const router = useRouter();
  const { setProfile } = useUser();

  useEffect(() => {
    const { username, avator } = router.query;
    setProfile({
      name: username as string,
      avator: avator as string,
    });
    const prevUrl = localStorage.getItem("prevUrl");

    if (prevUrl) {
      router.replace(prevUrl);
    }
  }, [router, setProfile]);

  return <p>wait...</p>;
}
