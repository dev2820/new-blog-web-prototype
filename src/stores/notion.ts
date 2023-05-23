import { atom, useRecoilState } from "recoil";

const notionCodeState = atom<string>({
  key: "notionCodeState",
  default: "",
});

export const useNotion = () => {
  const [notionCode, setNotionCode] = useRecoilState(notionCodeState);

  const setCode = (code: string) => {
    setNotionCode(code);
  };

  return {
    setCode,
    notionCode,
  };
};
