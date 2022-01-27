<script>
	import TopNav from './TopNav.svelte';
	import Instructions from './Instructions.svelte';
	import Render from './Render.svelte';
	import Snippet from './Snippet.svelte';
	import Scrollyteller from './Scrollyteller.svelte';
	import Footer from './Footer.svelte';
	import ErrorMessage from './ErrorMessage.svelte';

	export let snippet;
	export let slides;
	export let error;
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
	<p>Paste the google doc share link into the field below...</p>
	<Render />
	{#if error}
		<ErrorMessage {error} />
	{/if}
	{#if snippet}
		<Snippet {snippet} />
	{/if}
	{#if slides?.length}
		<h3>Preview</h3>
	{/if}
</section>
{#if slides?.length}
	<Scrollyteller {slides} />
{/if}
<Footer />

<style>
	section {
		all: unset;
		display: block;
		margin: var(--sfe-section-margin);
		min-height: 100vh;
	}

	h3:last-child {
		border-bottom: 1px solid var(--sfe-black50);
		padding-bottom: 10px;
	}
</style>
