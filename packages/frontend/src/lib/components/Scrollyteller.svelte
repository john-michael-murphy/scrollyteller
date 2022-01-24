<script>
	import * as Scrolly from 'scroll-n-tell';
	export let slides;

	let scrollyEl;

	$: if (scrollyEl && slides) {
		scrollyEl.querySelectorAll('*').forEach((n) => n.remove());
		Scrolly.render({ slides }, scrollyEl);
	}
</script>

{#key slides}
	<section id="preview" bind:this={scrollyEl} />
{/key}
