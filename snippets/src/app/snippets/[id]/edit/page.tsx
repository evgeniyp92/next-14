import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";

interface SnippetEditProps {
  params: {
    id: string;
  };
}

const SnippetEditPage = async (props: SnippetEditProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div>Editing snippet with title {snippet.title}</div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
