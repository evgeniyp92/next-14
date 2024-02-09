import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditProps {
  params: {
    id: string;
  };
}

const SnippetEdit = async (props: SnippetEditProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>Editing snippet with title {snippet.title}</div>;
};

export default SnippetEdit;
