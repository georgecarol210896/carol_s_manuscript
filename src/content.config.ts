import { defineCollection, z } from 'astro:content';

const postSchema = ({ image }: { image: () => z.ZodTypeAny }) => z.object({
  title: z.string(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),
  description: z.string().default(''),
  image: image().optional(),
});

const tunedTheology = defineCollection({
  type: 'content',
  schema: postSchema,
});

const startupStarters = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  'tuned-theology': tunedTheology,
  'startup-starters': startupStarters,
};
