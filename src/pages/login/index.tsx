import { useRouter } from "next/router";
import { useUser } from "@/stores/user";

export default function LoginPage() {
  const router = useRouter();
  const { isAuthenticated, requestLogin } = useUser();

  const handleGoogleLogin = () => {
    localStorage.setItem("prevUrl", router.route);
    window.location.assign(`api/auth/google?callbackUrl=${router.pathname}`);
  };

  if (isAuthenticated) return <AlreadyLogined></AlreadyLogined>;
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
