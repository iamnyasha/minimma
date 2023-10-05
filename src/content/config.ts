import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      date: z.date(),
      tag: z.array(z.string()),
    }),
});

const settings = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      sitename: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      logo: image().optional(),
      keywords: z.array(z.string()).optional(),
      project_tags: z.array(z.string()).optional(),
      socials: z
        .array(
          z.object({
            target: z.string(),
            name: z.string(),
            link: z.string(),
          }),
        )
        .optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
  settings,
};
