import Link from "next/link";
import { useUser } from "@/stores/user";

export default function HomePage() {
  const { isAuthenticated, profile } = useUser();
  const loginInfo = {
    isAuthenticated,
    profile,
  };
  return (
    <>
      <h1>Home</h1>
      <Account loginInfo={loginInfo}></Account>
    </>
  );
}

const Account: React.FC<{
  loginInfo: {
    isAuthenticated: boolean;
    profile: { name: string };
  };
}> = (props) => {
  const { loginInfo } = props;
  const { isAuthenticated, profile } = loginInfo;
  const toUserPage = `/@${profile.name}`;

  if (isAuthenticated) {
    return <Link href={toUserPage}>{profile.name}</Link>;
  } else {
    return <Link href="/login">login</Link>;
  }
};
