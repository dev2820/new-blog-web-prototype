import { atom, useRecoilState } from "recoil";

const isAuthenticatedState = atom<boolean>({
  key: "isAuthenticatedState",
  default: false,
});

const profileState = atom<{ name: string }>({
  key: "profileState",
  default: {
    name: "",
  },
});

export const useUser = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);
  const [profile, setProfile] = useRecoilState(profileState);

  const requestLogin = () => {
    setIsAuthenticated(true);
    setProfile({
      name: "dev2820",
    });
  };

  return {
    isAuthenticated,
    profile,
    requestLogin,
  };
};
