<script>
	import { onMount } from 'svelte';
	import get_doc from '$lib/utils/get_doc.js';
	import parse_doc from '$lib/utils/parse_doc.js';
	import transform_data from '$lib/utils/transform_data.js';
	import Slides from '$lib/Slides.svelte';
	import Loading from './Loading.svelte';
	import Message from './Message.svelte';

	export let mock;

	let props;
	let error;

	function get_doc_id() {
		const url = new URL(window.location.href);
		return url.searchParams.get('id');
	}

	async function get_slides(id) {
		const doc = await get_doc(id);
		const archie = await parse_doc(doc);
		const props = await transform_data(archie);
		return props;
	}

	onMount(async () => {
		try {
			if (mock) {
				props = mock;
				return;
			}

			const id = get_doc_id();
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
		<Message>
			{error}
		</Message>
	{:else}
		<Message>
			<Loading />
		</Message>
	{/if}
</main>

<style>
	main {
		position: relative;
	}
</style>
