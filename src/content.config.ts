import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // High-speed modern content loader

const postsCollection = defineCollection({
	// Tell Astro to look for any markdown files inside src/content/posts
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		date: z.string(),
		category: z.string(), 
		summary: z.string(),
		author: z.string().default('Editorial Team'),
		image: z.string().optional(), // Added: Link to a post cover image
	}),
});

export const collections = {
	'posts': postsCollection,
};