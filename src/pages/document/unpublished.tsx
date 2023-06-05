import { newBlogAPI } from "@/utils";
import { useEffect, useState } from "react";

export default function UnpublishedPage() {
  const [docs, setDocs] = useState<any[]>([]);
  const handleCallDocs = async () => {
    const { data } = await newBlogAPI.get<{ results: any[] }>("/user/document");
    console.log(data);
    const { results } = data;
    setDocs([...results]);
  };

  useEffect(() => {
    handleCallDocs();
  }, []);

  return (
    <>
      <h2>unpublished</h2>
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>{doc}</li>
        ))}
      </ul>
    </>
  );
}
