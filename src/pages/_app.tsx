import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
import "@/app/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
