import { atom, useRecoilState } from "recoil";

const isOpenedState = atom<boolean>({
  key: "isOpenedState",
  default: false,
});

export const useModal = () => {
  const [isOpened, setIsOpened] = useRecoilState(isOpenedState);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  return {
    openModal,
    closeModal,
    isOpened,
  };
};
