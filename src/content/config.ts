import { Tag } from '@/consts';
import { defineCollection, z } from 'astro:content';

const tags = Object.values(Tag).map((x) => x.toString()) as [string, ...string[]];
const articlesAndProjects = defineCollection({
  schema: z.object({
    live: z.boolean(),
    title: z.string(),
    description: z.string(),
    published: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    tags: z.array(z.enum(tags)),
  }),
});

export const collections = {
  articles: articlesAndProjects,
  projects: articlesAndProjects,
};
