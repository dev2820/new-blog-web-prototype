import React, { PropsWithChildren } from "react";
import LoginButton from "@/components/LoginButton";
import Modal from "@/components/Modal";
import { useModal } from "@/stores/modal";
import LoginPage from "@/pages/login";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <header>
        <LoginButton></LoginButton>
      </header>

      {/* Render the content */}
      <main>{children}</main>

      {/* Add any shared footer or other layout elements */}
      <footer>{/* Footer content */}</footer>
      <Modal>
        <LoginPage></LoginPage>
      </Modal>
    </div>
  );
};

export default Layout;
