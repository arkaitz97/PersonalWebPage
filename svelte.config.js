//import adapter from '@sveltejs/adapter-auto';
import cloudflare from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		//adapter: adapter(),
		adapter: cloudflare(),
		csp: {
			directives: {
				'script-src': ['strict-dynamic', 'static.cloudflareinsights.com'],
				'connect-src': ['cloudflareinsights.com']
			}
		},

		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte'
	}
};

export default config;
