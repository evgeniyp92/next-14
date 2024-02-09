import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

const SnippetCreatePage = () => {
  async function createSnippet(formData: FormData) {
    "use server"; // This tells Next to run this code on the server

    // Check the users inputs and make sure they're valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // Create new record in the database
    const createdSnippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(createdSnippet);

    // Redirect the user to the home page for now (snippet page for later)
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className='font-bold m-3'>Create a Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label htmlFor='title' className='w-12'>
            Title
          </label>
          <input
            name='title'
            className='border rounded p-2 w-full'
            id='title'
          />
        </div>
        <div className='flex gap-4'>
          <label htmlFor='code' className='w-12'>
            Code
          </label>
          <textarea
            name='code'
            className='border rounded p-2 w-full'
            id='code'
          />
        </div>
        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
