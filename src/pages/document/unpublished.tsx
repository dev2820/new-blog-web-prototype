import { newBlogAPI } from "@/utils";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function UnpublishedPage() {
  const [docs, setDocs] = useState<any[]>([]);
  const callDocs = async () => {
    const { data } = await newBlogAPI.get<{ results: any[] }>("/user/document");
    const { results } = data;
    setDocs([...results]);
  };

  useEffect(() => {
    callDocs();
  }, []);

  return (
    <>
      <h2>unpublished</h2>
      <ul>
        {docs.map((doc, index) => (
          <li key={index}>
            <Link href={`/document/publish?id=${doc.id}`}>
              <Card>
                <p>{"created: " + doc.created_time}</p>
                <p>{"last_edited: " + doc.last_edited_time}</p>
                <h3>{doc.properties.title.title[0].plain_text}</h3>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
