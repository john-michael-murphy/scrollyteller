<script type="ts" context="module">
	import { TEMPLATE_ID } from '$lib/consts';

	export async function load({ page, fetch }) {
		let id = page.query.get('id') ?? TEMPLATE_ID;
		const res = await fetch(`/doc?id=${id}`);

		let body;

		try {
			body = await res.json();
		} catch {
			body = await res.text();
		}

		if (!res.ok) {
			return {
				props: { error: body }
			};
		}

		return {
			props: { data: body }
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
		Scrolly.render(data, scrollyEl);
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
		<Embed {data} />
	{/if}
</main>

<style>
	section#preview {
		min-height: 100vh;
		background: rgb(236, 236, 236);
	}

	:global(.scrolly-button) {
		all: unset;
		cursor: pointer;
		padding: 5px 10px;
		border-radius: 5px;
		background: black;
		color: white;
		box-shadow: 2px 2px 18px -5px rgba(0, 0, 0, 0.75);
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
