import adapter from '@sveltejs/adapter-static';
//import cloudflare from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		//adapter: cloudflare(),
		csp:{
			mode: 'auto'
		}

		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte'
	}
};

export default config;
