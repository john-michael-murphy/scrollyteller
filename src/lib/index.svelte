<script>
	import { onMount } from 'svelte';
	import Slides from '$lib/Slides.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Message from '$lib/components/Message.svelte';
	import download_doc from '$lib/utils/download_doc.js';
	import doc_to_props from '$lib/utils/doc_to_props.js';

	let props;
	let error;

	onMount(async () => {
		try {
			const id = new URL(window.location.href).searchParams.get('id');
			const doc = await download_doc(id);
			props = await doc_to_props(doc);
		} catch (e) {
			console.error(e);
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
