<script context="module">
	import { TEMPLATE_ID } from '$lib/consts';
	export async function load({ url, fetch }) {
		let id = url.searchParams.get('id') ?? TEMPLATE_ID;

		const res = await fetch(`/generate?id=${id}`);

		let body = await res.text();

		if (!res.ok) {
			return {
				props: { error: body }
			};
		}

		return {
			props: JSON.parse(body)
		};
	}
</script>

<script>
	import AboveTheFold from '$lib/components/AboveTheFold.svelte';
	export let error;
	export let snippet;
	export let slides;
</script>

<main>
	<AboveTheFold {snippet} {slides} {error} />
</main>
