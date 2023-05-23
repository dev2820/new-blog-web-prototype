import { atom, useRecoilState } from "recoil";

const notionCodeState = atom<string>({
  key: "notionCodeState",
  default: "",
});

const accessTokenState = atom<string>({
  key: "accessTokenState",
  default: "",
});

export const useNotion = () => {
  const [notionCode, setNotionCode] = useRecoilState(notionCodeState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const setCode = (code: string) => {
    setNotionCode(code);
  };

  return {
    setCode,
    setAccessToken,
    notionCode,
  };
};
