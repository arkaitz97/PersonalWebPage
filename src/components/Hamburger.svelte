<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function toggle() {
		dispatch("toggle");
	};
</script>
<button class="hamburger hamburger--elastic is-active" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
<style>
	#hamburger {
		--size: 21px;
		height: var(--size);
		width: var(--size);
		display: grid;
		grid-row-gap: 5px;
	}

	#hamburger:hover{
		cursor: pointer;
	}

	#hamburger span{
		height: 2px;
		border-radius: 1px;
		background: black;
		display: block;
	}

	#hamburger.close span:nth-child(2) {
		display: none;
	}

	#hamburger.close span:first-child {
		transform: rotate(45deg) translate(0px, 21px);
	}

	#hamburger.close span:last-child {
		transform: rotate(-45deg) translate(0px, -21px);
	}
</style>
