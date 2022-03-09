<script>
	import Menu from '../components/Menu.svelte';
</script>
<div>
	<Menu/>
	<p>Content</p>
</div>
<style>
	div{
		display: grid;
		justify-items: center;
		align-items: end;
		height: 100vh;
		grid-template-areas: 'Content' 'Menu';
	}

	p{
		grid-area: Content;
	}

	@media screen and (min-width: 840px){
		div{
			grid-template-columns: auto 1fr;
			grid-template-areas: 'Menu Content';
			align-items: start;
		}
	}
</style>
