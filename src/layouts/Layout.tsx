import React, { PropsWithChildren } from "react";
import LoginButton from "@/components/LoginButton";
import Modal from "@/components/Modal";
import { useModal } from "@/stores/modal";
import { useUser } from "@/stores/user";
import LoginPage from "@/pages/login";
import Image from "next/image";

const Layout = ({ children }: PropsWithChildren) => {
  const user = useUser();
  console.log(user.profile.avator, decodeURI(user.profile.avator));
  return (
    <div>
      <header>
        {user.profile.name === "" ? (
          <LoginButton></LoginButton>
        ) : (
          <>
            <div>{user.profile.name}</div>
            <Image src={decodeURI(user.profile.avator)} alt="avator"></Image>
            <img src={user.profile.avator}></img>
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
