import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
	integrations: [tailwind(), react()],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					content: { type: 'text', value: 'https://res.cloudinary.com/' }
				}
			],
		]
	}
});