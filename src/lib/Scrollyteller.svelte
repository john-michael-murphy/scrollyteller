<script>
	import { onMount } from 'svelte';
	import get_doc from '$lib/utils/get_doc.js';
	import parse_doc from '$lib/utils/parse_doc.js';
	import transform_data from '$lib/utils/transform_data.js';
	import Slides from '$lib/Slides.svelte';

	let props;
	let error;

	async function get_slides(id) {
		const doc = await get_doc(id);
		const archie = await parse_doc(doc);
		const props = await transform_data(archie);
		return props;
	}

	onMount(async () => {
		try {
			const url = new URL(window.location.href);
			let id = url.searchParams.get('id');
			props = await get_slides(id);
		} catch (e) {
			error = e.message;
		}
	});
</script>

<main>
	{#if props?.slides?.length}
		<Slides {...props} />
	{:else if error}
		<code>
			{error}
		</code>
	{/if}
</main>

<style>
	main {
		position: relative;
	}

	code {
		all: unset;
		display: block;
		background: var(--sfe-black70);
		padding: 10px;
		border-radius: 3px;
		font-size: 1rem;
	}
</style>
