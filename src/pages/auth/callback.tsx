import { useRouter } from "next/router";

export default function Callback() {
  const router = useRouter();

  console.log(router);

  return <h1>loading...</h1>;
}
