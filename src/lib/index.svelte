<script>
	import { onMount } from 'svelte';
	import Slides from '$lib/components/Slides.svelte';
	import Loading from '$lib/components/Loading.svelte';
	import Message from '$lib/components/Message.svelte';
	import download_doc from '$lib/utils/download_doc.js';
	import doc_to_props from '$lib/utils/doc_to_props.js';

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

	function toggle_fullscreen() {
		fullscreen = !fullscreen;
		window.parent.postMessage(`scrolly-fullscreen-${fullscreen}`, '*');
	}
</script>

<div>
	<main class={iframe && !fullscreen ? "blur" : null}>
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
		<button on:click={toggle_fullscreen}>{fullscreen ? 'Close' : 'Fullscreen'}</button>
	{/if}
</div>



<style>
	main {
		position: relative;
	}

	button {
		position: fixed;
		z-index: 1;
		bottom: 10px;
		right: 10px;
	}
</style>
