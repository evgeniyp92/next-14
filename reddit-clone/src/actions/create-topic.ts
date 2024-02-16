'use server';

import { z } from 'zod';
import { auth } from '@/auth';
import type { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/db';
import paths from '@/paths';

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: 'Must be lowercase letters or dashes without spaces',
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[]; // form level errors
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  // TODO: Revalidate homepage after creating topic
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to do this.'],
      },
    };
  }

  let topic: Topic;
  try {
  } catch (error: unknown) {}

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return { errors: {} };
}
