<script type="ts" context="module">
	import { TEMPLATE_ID } from '$lib/consts';

	export async function load({ url, fetch }) {
		let id = url.searchParams.get('id') ?? TEMPLATE_ID;

		const res = await fetch(`/doc?id=${id}`);

		let body = await res.text();
		console.log(body);
		if (!res.ok) {
			return {
				props: { error: body }
			};
		}

		return {
			props: { data: JSON.parse(body) }
		};
	}
</script>

<script>
	import * as Scrolly from 'scroll-n-tell';
	import AboveTheFold from '$lib/components/AboveTheFold.svelte';
	import Embed from '$lib/components/Snippet.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	export let data;
	export let error;

	let scrollyEl;

	$: if (scrollyEl && data) {
		scrollyEl.querySelectorAll('*').forEach((n) => n.remove());
<<<<<<< HEAD:packages/frontend/src/routes/index.svelte
		Scrolly.render(data.props, scrollyEl);
=======
		Scrolly.render(data, scrollyEl);
>>>>>>> 2acf84ed45c7cc500ad20b66a5a62daa34ed9faa:generator/src/routes/index.svelte
	}
</script>

<main>
	<AboveTheFold />
	{#if error}
		<ErrorMessage {error} />
	{:else}
		{#key data}
			<section id="preview" bind:this={scrollyEl} />
		{/key}
<<<<<<< HEAD:packages/frontend/src/routes/index.svelte
		<Embed snippet={data.snippet} />
=======
		<Embed {data} />
>>>>>>> 2acf84ed45c7cc500ad20b66a5a62daa34ed9faa:generator/src/routes/index.svelte
	{/if}
</main>

<style>
	section#preview {
		min-height: 100vh;
	}

	:global(.scrolly-button) {
		all: unset;
		cursor: pointer;
		padding: 5px 10px;
		border-radius: 5px;
		background: black;
		color: white;
		opacity: 0.75;
		transition: opacity 0.2s ease-in-out;
	}

	:global(.scrolly-button:hover) {
		opacity: 1;
	}

	:global(main) {
		font-family: 'Roboto', sans-serif;
	}
</style>
