<script>
	import { onMount } from 'svelte';
	import Slides from '$lib/components/Slides.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Message from '$lib/components/Message.svelte';
	import download_doc from '$lib/utils/download_doc.js';
	import doc_to_props from '$lib/utils/doc_to_props.js';
	import Fullscreen from './components/Fullscreen.svelte';

	let props;
	let error;
	let iframe = false;

	onMount(async () => {
		try {
			const url = new URL(window.location.href);
			iframe = url.searchParams.get('iframe') === 'true';
			const id = url.searchParams.get('id');
			const doc = await download_doc(id);
			props = await doc_to_props(doc);
		} catch (e) {
			console.error(e);
			error = e.message;
		}
	});

	let fullscreen = false;

	function open() {
		fullscreen = true;
		window.parent.postMessage(`scrolly-fullscreen-true`, '*');
	}

	function close() {
		fullscreen = false;
		window.parent.postMessage(`scrolly-fullscreen-false`, '*');
	}
</script>

<div>
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
	{#if iframe}
		<Fullscreen title={props?.title} {open} {close} {fullscreen} />
	{/if}
</div>



<style>
	main {
		position: relative;
	}
</style>
