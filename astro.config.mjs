import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	adapter: vercel(),
	// Enable Solid to support Solid JSX components.
	integrations: [solid()],
});
