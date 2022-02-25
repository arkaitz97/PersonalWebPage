<script>
	import MenuItem from './MenuItem.svelte';
	let language = "es";

	const locales = (async () => {
			const response = await fetch(`locales/${language}/menu.json`);
			let r = await response.text();
			return JSON.parse(r);
		})();
	let showMenu = false;
	function toggleMenu() {showMenu = !showMenu;};
</script>

<nav>
	{#await locales}
		<p>Loading menu...</p>
	{:then data}
	<ul id="menu-list" class={showMenu ? 'visible' : ''}>
		<li>
			<MenuItem icon="home" status="active" href="/"><span slot='label'>{data.home}</span></MenuItem>
		</li>
		<li>
			<MenuItem icon="source" href="/projects"><span slot='label'>{data.project}</span></MenuItem>
		</li>
		<li>
			<MenuItem icon="description" href="/blog"><span slot='label'>{data.blog}</span></MenuItem>
		</li>
		<li>
			<MenuItem icon="contact_page" href="/contact"><span slot='label'>{data.contact}</span></MenuItem>
		</li>
	</ul>
	{:catch error}
		<p>error</p>
	{/await}
</nav>

<style>
	nav{
		display: grid;
		grid-template-columns: 1fr;
		justify-items: end;
		align-items: center;
		background: var(--md-surface);
		height: 80px;
	}

	ul{
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 4px;
		grid-auto-flow: column;
		align-items: center;
		justify-items: center;
		width: 100vw;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li{
		width: 100%;
		cursor: pointer;
	}
</style>
