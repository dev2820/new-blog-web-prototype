import { atom, useRecoilState } from "recoil";
import { newBlogAPI } from "@/utils";

type Profile = { name: string; avator: string };
const profileState = atom<Profile>({
  key: "profileState",
  default: {
    name: "",
    avator: "",
  },
});

export const useUser = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  const clearProfile = () => {
    setProfile({
      name: "",
      avator: "",
    });
  };
  const fetchProfile = async () => {
    const { data: _profile } = await newBlogAPI.get<Profile>("/user");

    setProfile({
      name: _profile.name,
      avator: _profile.avator,
    });
  };

  const isEmpty = () => {
    return profile.name === "" && profile.avator === "";
  };
  return {
    profile,
    setProfile,
    fetchProfile,
    clearProfile,
    isEmpty,
  };
};
