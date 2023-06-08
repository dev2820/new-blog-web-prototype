import { useRouter } from "next/router";
import { useUser } from "@/stores/user";

export default function LoginPage() {
  const router = useRouter();
  const { profile } = useUser();

  const handleGoogleLogin = () => {
    sessionStorage.setItem("prevUrl", router.route);
    window.location.assign(`/api/auth/google`);
  };

  if (profile.name) return <AlreadyLogined></AlreadyLogined>;
  return <NotLogined handleGoogleLogin={handleGoogleLogin}></NotLogined>;
}

const AlreadyLogined = () => {
  return <p> you already loginned</p>;
};

const NotLogined = ({
  handleGoogleLogin,
}: {
  handleGoogleLogin: () => void;
}) => {
  return (
    <>
      <h1>login</h1>
      <button onClick={handleGoogleLogin}>google oauth</button>
    </>
  );
};
