<script>
import { onMount } from "svelte";
import Loading from "./Loading.svelte";


	export let type;
	export let slide;
	export let alt_text;
	export let caption;
	
	onMount(async () => {
		type = await type;
	});
</script>

<figure>
	{#if type === 'image'}
		<img class="scrolly-slide-media" src={slide} alt={alt_text} />
	{:else if type === 'video'}
		<video class="scrolly-slide-media" src={slide} playsinline controls alt={alt_text} />
	{:else if type === 'iframe'}
		<div alt={alt_text} class="scrolly-slide-iframe">
			{@html slide}
		</div>
	{:else if type === 'text'}
		<span alt={alt_text} class="scrolly-slide-text">
			{@html slide}
		</span>
	{:else if type instanceof Promise}
		<div class="scrolly-slide-message">
			<Loading />
		</div>
	{:else}
		<div class="scrolly-slide-message">
			<span>Error: The type "{type}" is not supported.</span>
		</div>
	{/if}
	{#if caption}
		<figcaption class="scrolly-slide-caption">
			{@html caption}
		</figcaption>
	{/if}
</figure>

<style>
	figure {
		all: unset;
		position: relative;
		margin-right: 10px;
		display: flex;
		height: 100vh;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}

	figcaption {
		display: block;
	}

	.scrolly-slide-media {
		width: 100%;
		max-height: 80%;
		background: transparent;
		object-fit: contain;
	}

	.scrolly-slide-text {
		font-family: var(--scrolly-serif);
		margin: 0 20px;
		max-width: var(--scrolly-max-text-width);
		white-space: pre-wrap;
		line-height: 24px;
		color: black;
		font-size: 18px;
	}

	.scrolly-slide-text :global(b) {
		/* color: var(--scrolly-link-color); */
	}

	.scrolly-slide-text :global(a) {
		color: var(--scrolly-link-color);
	}

	.scrolly-slide-text :global(a):hover {
		text-decoration: none;
	}

	@media (max-width: 800px) {
		.scrolly-slide-text {
			font-size: 16px;
			line-height: 20px;
		}
	}

	.scrolly-slide-iframe {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		width: 100%;
	}

	.scrolly-slide-iframe :global(iframe) {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.scrolly-slide-message {
		font-family: var(--scrolly-sans);
		aspect-ratio: 16 / 9;
		width: 100%;
		background: #eee;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.scrolly-slide-caption {
		font-family: var(--scrolly-sans);
		color: black;
		padding: 15px;
		font-size: 14px;
		line-height: 18px;
		align-self: flex-start;
	}
</style>
