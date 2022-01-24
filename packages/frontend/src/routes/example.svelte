<script context="module">
	import { TEMPLATE_ID } from '$lib/consts';
	export async function load({ fetch }) {
		const res = await fetch(`/generate?id=${TEMPLATE_ID}`);

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
	import TopNav from '$lib/components/TopNav.svelte';
	import Scrollyteller from '$lib/components/Scrollyteller.svelte';
	export let slides;
</script>

<main>
	<div>
		<TopNav />
	</div>
	<Scrollyteller {slides} />
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
