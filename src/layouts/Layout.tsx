import React, { PropsWithChildren } from "react";
import LoginButton from "@/components/LoginButton";
import Modal from "@/components/Modal";
import { useModal } from "@/stores/modal";
import { useUser } from "@/stores/user";
import LoginPage from "@/pages/login";
import Image from "next/image";

const Layout = ({ children }: PropsWithChildren) => {
  const user = useUser();
  return (
    <div>
      <header>
        {user.profile.name === "" ? (
          <LoginButton></LoginButton>
        ) : (
          <>
            <div>{user.profile.name}</div>
            <Image src={user.profile.avator} alt="avator"></Image>
          </>
        )}
      </header>

      <main>{children}</main>

      <footer>{/* Footer content */}</footer>
      <Modal>
        <LoginPage></LoginPage>
      </Modal>
    </div>
  );
};

export default Layout;
