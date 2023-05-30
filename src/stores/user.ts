import { atom, useRecoilState } from "recoil";

const profileState = atom<{ name: string; avator: string }>({
  key: "profileState",
  default: {
    name: "",
    avator: "",
  },
});

export const useUser = () => {
  const [profile, setProfile] = useRecoilState(profileState);

  return {
    profile,
    setProfile,
  };
};
