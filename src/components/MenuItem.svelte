<script>
	export let status = 'inactive';
	export let icon;
	export let href;
</script>
<a href="{href}" class="{status}">
	<span class="icon" >
		<span class="material-icons">{icon}</span>
	</span>
	{#if $$slots.label}
		<slot name='label'></slot>
	{/if}
</a>

<style>
	a{
		display: grid;
		grid-template-rows: 32px auto;
		grid-row-gap: 4px;
		color: var(--md-on-surface-variant);
		font: var(--md-typescale-label-medium-font);
		line-height: var(--md-typescale-label-medium-line-height);
		align-items: center;
		justify-items: center;
		padding-top: 12px;
		padding-bottom: 16px;
		background: var(--md-surface);
		position: relative;
	}

	a.active{
		color: var(--md-on-surface);
	}

	a:hover{
		background: none;
		color: var(--md-on-surface-variant);
	}

	a:hover::before{
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--md-on-surface-variant);
		opacity: var(--md-hover-state-layer-opacity);
	}

	a.active:hover::before{
		background: var(--md-on-surface);
		opacity: var(--md-hover-state-layer-opacity);
	}

	a.active:hover{
		color: var(--md-on-surface);
	}

	a.active:hover .icon{
		color: var(--md-on-secondary-container);
	}

	.icon{
		height: 24px;
		display: grid;
		width: 64px;
		justify-items: center;
		color: var(--md-on-surface-variant);
	}

	a:hover .icon{
		color: var(--md-on-surface-variant);
	}

	a.active .icon{
		border-radius: 16px;
		background: var(--md-secondary-container);
		color: var(--md-on-secondary-container);
	}

	a:not(active) .icon {
	}
</style>
