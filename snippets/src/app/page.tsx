import { db } from "@/db";

export default async function Home() {
  // Only need HTTP requests to make requests to 3-rd party sites
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippet => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });

  return <div>{renderedSnippets}</div>;
}
