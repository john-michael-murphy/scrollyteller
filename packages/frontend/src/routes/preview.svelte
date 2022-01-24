<script context="module">
	export async function load({ url, fetch }) {
		let id = url.searchParams.get('id');

		if (!id) {
			return {
				status: 403,
				error: `Missing ID. Try something like: /preview?id=${TEMPLATE_ID}`
			};
		}

		const res = await fetch(`/generate?id=${id}`);

		let body;

		try {
			body = await res.json();
		} catch (e) {
			console.error(e);
			body = await res.text();
		}

		if (!res.ok) {
			return {
				props: { error: body }
			};
		}

		return {
			props: body
		};
	}
</script>

<script>
	import TopNav from '$lib/components/TopNav.svelte';
	import Scrollyteller from '$lib/components/Scrollyteller.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import { TEMPLATE_ID } from '../lib/consts';
	export let slides;
	export let error;
</script>

<main>
	<div>
		<TopNav />
	</div>
	{#if error}
		<ErrorMessage {error} />
	{:else}
		<Scrollyteller {slides} />
	{/if}
</main>

<style>
	main {
		position: relative;
	}

	div {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1;
		margin: var(--sfe-section-margin);
	}
</style>
