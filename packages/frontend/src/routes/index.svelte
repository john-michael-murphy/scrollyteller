<script context="module">
	import { GOOGLE_FILE_ID } from '$lib/doc/patterns.js';
	export async function load({ url, fetch }) {
		let id = url.searchParams.get('id');

		id = GOOGLE_FILE_ID.exec(id)?.[0];

		if (!id) {
			return {
				props: {}
			};
		}

		const res = await fetch(`/generate?id=${id}`);

		let body = await res.text();

		try {
			body = JSON.parse(body);
		} catch (e) {
			throw body;
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
	import AboveTheFold from '$lib/components/AboveTheFold.svelte';
	export let error;
	export let snippet;
	export let slides;
</script>

<main>
	<AboveTheFold {snippet} {slides} {error} />
</main>
