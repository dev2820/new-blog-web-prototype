/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useEffect } from "react";
import LoginButton from "@/components/LoginButton";
import Modal from "@/components/Modal";
import { useUser } from "@/stores/user";
import LoginPage from "@/pages/login";
import Image from "next/image";
import { isNil, newBlogAPI } from "@/utils";

const Layout = ({ children }: PropsWithChildren) => {
  const user = useUser();

  const handleLogout = async () => {
    await newBlogAPI.get("/auth/logout");
    sessionStorage.removeItem("prevUrl");
    localStorage.removeItem("new-blog-token");
    user.clearProfile();
  };

  useEffect(() => {
    if (user.isEmpty() && !isNil(localStorage.getItem("new-blog-token"))) {
      user.fetchProfile();
    }
  }, []);

  return (
    <div>
      <header>
        {user.profile.name === "" ? (
          <LoginButton></LoginButton>
        ) : (
          <>
            <div>{user.profile.name}</div>
            <Image
              src={user.profile.avator}
              alt="avator"
              width={64}
              height={64}
            ></Image>
            <button onClick={handleLogout}>logout</button>
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
