import Link from 'next/link';
import { db } from '@/db';

export const dynamic = 'force-dynamic'; // treat this as a dynamic route no matter what

export default async function Home() {
  // Only need HTTP requests to make requests to 3-rd party sites
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(snippet => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        className='flex justify-between items-center p-2 border rounded border-black'
        key={snippet.id}>
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className='flex m-2 justify-between items-center'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link
          href='/snippets/new'
          className='border p-2 rounded border-black'>
          New
        </Link>
      </div>
      <div className='flex flex-col gap-2'>{renderedSnippets}</div>
    </div>
  );
}
