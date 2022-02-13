<script>
	import { onMount } from 'svelte';
	import Scrolly from '$lib/components/Scrolly.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import parse_doc from '$lib/doc/index.js';

	export let slides;
	export let error;

	onMount(() => {
		const url = new URL(window.location.href);
		let id = url.searchParams.get('id');
		console.log(id);
		parse_doc(id);
	});
</script>

<body>
	{#if error}
		<ErrorMessage {error} />
	{:else}
		<Scrolly {slides} />
	{/if}
</body>

<style>
	body {
		position: relative;
	}
</style>
