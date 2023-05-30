import { useModal } from "@/stores/modal";

export default function LoginButton() {
  const modal = useModal();
  const openModal = () => {
    modal.openModal();
  };

  return <button onClick={openModal}>google oauth</button>;
}
