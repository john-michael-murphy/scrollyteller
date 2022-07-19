<script>
	import { onMount } from 'svelte';

    export let message = 'Loading'
	let show = false;

	onMount(() => {
		setTimeout(() => {
			show = true;
		}, 1500);
	});
</script>

{#if show}
	<span class="loading">{message}</span>
{/if}

<style>
	.loading {
		position: relative;
	}

	.loading:after {
		position: absolute;
		display: inline-block;
		vertical-align: bottom;
		animation: ellipsis steps(4, end) 900ms infinite;
		content: '\2026';
		clip: rect(auto, 0rem, auto, auto);
	}

	@keyframes ellipsis {
		to {
			clip: rect(auto, 1.25rem, auto, auto);
		}
	}
</style>
