<script>
	export let slides;

	let currIndex = 0;
	let rootEl;

	const intersectionOptions = {
		root: rootEl,
		rootMargin: '0px',
		threshold: 0.2
	};

	const observer = new IntersectionObserver((entries) => {
		const [entry] = entries;

		currIndex = +entry.target.dataset.index;
	}, intersectionOptions);

	export function observe(node) {
		observer.observe(node);
	}
</script>

<section bind:this={rootEl} class="scrollyteller">
	<ol class="scrolly-annotations">
		<li use:observe data-index={0} style="height:50vh;" />
		{#each slides as { annotation }, index}
			<li class={`scrolly-annotation scrolly-annotation-${index}`}>
				<span class="scrolly-annotation-text" use:observe data-index={index}>
					{@html annotation}
				</span>
			</li>
		{/each}
		<li use:observe data-index={slides.length} style="height:120vh;" />
	</ol>
	<div class="scrolly-slides-outer">
		<ol class="scrolly-slides">
			{#each slides as { slide }, index}
				<li
					class={`scrolly-slide scrolly-slide-${index}`}
					class:scrolly-visible={index === currIndex}
				>
					{#if slide.type === 'image'}
						<div class="scrolly-slide-media-container">
							<img class="scrolly-slide-media" src={slide.value} alt={`Image for slide ${index}`} />
						</div>
					{:else if slide.type === 'video'}
						<div class="scrolly-slide-media-container">
							<video
								class="scrolly-slide-media"
								src={slide.value}
								autoplay
								loop
								muted
								alt={`Image for slide ${index}`}
							/>
						</div>
					{:else}
						<span class="scrolly-slide-text">
							{@html slide.value}
						</span>
					{/if}
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	ol,
	li,
	section,
	div {
		all: unset;
		display: block;
	}

	section {
		position: relative !important;
		background: white;
	}

	@media (min-width: 800px) {
		section {
			display: grid !important;
			grid-template-columns: 2fr 5fr !important;
		}
	}

	.scrolly-annotations {
		background: transparent;
	}

	@media (min-width: 800px) {
		.scrolly-annotations {
			background: black;
		}
	}

	.scrolly-annotation {
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		height: 150vh !important;
		max-width: min(100%, 500px) !important;
		margin: auto !important;
	}

	.scrolly-annotation-text {
		background: rgb(0, 0, 0, 0.8);
		color: white;
		padding: 15px;
		margin: 0 30px;
		z-index: 1 !important;
		font-size: 1.1rem;
		border-radius: 3px;
	}

	.scrolly-slides-outer {
		height: 100%;
		position: relative;
	}

	@media (max-width: 800px) {
		.scrolly-slides-outer {
			width: 100% !important;
			top: 0 !important;
			position: absolute !important;
		}
	}

	.scrolly-slides {
		position: sticky !important;
		top: 0 !important;
		height: 100vh !important;
	}

	.scrolly-slide {
		height: 100vh !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		position: absolute !important;
		top: 0 !important;
		opacity: 0 !important;
		transition: opacity 0.75s;
		width: 100% !important;
		overflow: hidden !important;
	}

	.scrolly-visible {
		opacity: 1 !important;
	}

	.scrolly-slide-media-container {
		height: 100% !important;
		width: 100% !important;
	}

	.scrolly-slide-media {
		height: 100% !important;
		width: 100% !important;
		object-fit: contain !important;
	}

	.scrolly-slide-text {
		margin: 0 20px;
		max-width: 600px;
		white-space: pre-wrap !important;
	}

	@media (max-width: 800px) {
		.scrolly-slide-text {
			font-size: 1.1rem;
		}
	}
</style>
