<script>
	export let type;
	export let slide;
	export let alt_text;
	export let caption;
</script>

{#if type === 'image'}
	<div class="scrolly-slide-media-container">
		<img class="scrolly-slide-media" src={slide} alt={alt_text} />
	</div>
{:else if type === 'video'}
	<div class="scrolly-slide-media-container">
		<video class="scrolly-slide-media" src={slide} autoplay loop muted alt={alt_text} />
	</div>
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
	<div class="scrolly-slide-caption">
		{@html caption}
	</div>
{/if}

<style>
	.scrolly-slide-media {
		height: 100% !important;
		width: 100% !important;
		object-fit: contain !important;
	}

	.scrolly-slide-text {
		margin: 0 20px;
		max-width: 600px;
		white-space: pre-wrap !important;
		font-family: 'Lora', serif;
		line-height: 1.25rem;
	}

	@media (max-width: 800px) {
		.scrolly-slide-text {
			font-size: 1.1rem;
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

	.scrolly-slide-media-container {
		height: 100% !important;
		width: 100% !important;
	}

	.scrolly-slide-caption {
		position: absolute;
		bottom: 10px;
		right: 10px;
		color: black;
		padding: 5px 10px;
		font-size: 12px;
		margin: 2rem;
	}
</style>
