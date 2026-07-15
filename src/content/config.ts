import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.string(),
		category: z.string(), // Must match your targets: technology, science, finance, etc.
		summary: z.string(),
		author: z.string().default('Editorial Team'),
	}),
});

export const collections = {
	'posts': postsCollection,
};