import React from "react";

interface SnippetEditProps {
  params: {
    id: string;
  };
}

const SnippetEdit = (props: SnippetEditProps) => {
  const id = parseInt(props.params.id);

  return <div>Editing snippet with id {id}</div>;
};

export default SnippetEdit;
