import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: { id: string };
}

const SnippetView = async (props: SnippetShowPageProps) => {
  await new Promise(r => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound(); // this will traverse the folder structure and use the very first not-found file it can find
  }

  return <div>{snippet.title}</div>;
};

export default SnippetView;
