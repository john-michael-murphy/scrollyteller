<script>
	export let type;
	export let slide;
	export let alt_text;
	export let caption;
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
	{:else}
		<span alt={alt_text} class="scrolly-slide-text">
			{@html slide}
		</span>
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
		position: relative !important;
		margin-right: 10px;
		display: flex !important;
		height: 100vh !important;
		align-items: center !important;
		flex-direction: column;
		justify-content: center !important;
		width: 100% !important;
	}

	figcaption {
		display: block;
	}

	.scrolly-slide-media {
		width: 100%;
		max-height: 80%;
		background: black;
		object-fit: contain !important;
	}

	.scrolly-slide-text {
		font-family: var(--scrolly-serif);
		margin: 0 20px;
		max-width: var(--scrolly-max-text-width);
		white-space: pre-wrap !important;
		line-height: 20px;
		color: black;
		font-size: 14px;
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

	.scrolly-slide-caption {
		font-family: var(--scrolly-sans);
		color: black;
		padding: 10px 0;
		font-size: 14px;
		line-height: 18px;
	}
</style>
