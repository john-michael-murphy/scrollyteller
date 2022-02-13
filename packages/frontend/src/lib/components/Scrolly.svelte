<script>
	import * as Scrolly from 'scroll-n-tell';
	export let slides;

	let el;

	$: if (el && slides) {
		el.querySelectorAll('*').forEach((n) => n.remove());
		Scrolly.render({ slides }, el);
	}
</script>

{#key slides}
	<div bind:this={el} />
{/key}
