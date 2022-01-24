<script>
	import TopNav from './TopNav.svelte';
	import Instructions from './Instructions.svelte';
	import Render from './Render.svelte';
	import Snippet from './Snippet.svelte';
	import Scrollyteller from './Scrollyteller.svelte';
	import Footer from './Footer.svelte';

	export let snippet;
	export let slides;
</script>

<section>
	<TopNav />
	<h1>scrollyteller</h1>
	<h2>scroll-driven storytelling</h2>
	<p>
		Scrollyteller is a library for lorem ipsum dolor sit amet, consectetur adipiscing elit. In
		lacinia mattis felis ut sagittis. Donec fringilla pharetra tempor. Pellentesque fermentum mi nec
		libero malesuada accumsan. Phasellus libero ante, commodo sit amet varius eget, vehicula eget
		ex. Integer a purus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
		orci dolor, sagittis semper ipsum id, varius posuere nunc.
	</p>
	<h3>Usage</h3>
	<Instructions />
	<h3>Generate</h3>
	<p>Paste your google doc into the field below and click render.</p>
	<Render />
	<Snippet {snippet} />
	{#if slides?.length}
		<h3>Preview</h3>
		<p>Scroll down to preview...</p>
	{/if}
</section>
<Scrollyteller {slides} />
<Footer />

<style>
	section {
		all: unset;
		display: block;
		margin: var(--sfe-section-margin);
	}
</style>
