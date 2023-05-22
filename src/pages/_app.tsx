import { RecoilRoot } from "recoil";
import { Amplify } from "aws-amplify";
import { AppProps } from "next/app";
import awsconfig from "@/aws-exports";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
