<script>
	export let slides;

	let currIndex = 0;
	let rootEl;

	const intersectionOptions = {
		root: rootEl,
		rootMargin: '0px',
		threshold: 0.45
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
		{#each slides as { text }, index}
			<li class="scrolly-annotation">
				<span class="scrolly-annotation-text" use:observe data-index={index}>
					{@html text}
				</span>
			</li>
		{/each}
		<li use:observe data-index={slides.length} class="scrolly-annotation" />
	</ol>
	<div class="scrolly-slides-outer">
		<ol class="scrolly-slides">
			{#each slides as { card }, index}
				<li class="scrolly-slide" class:visible={index === currIndex}>
					{#if card.type === 'image'}
						<div class="scrolly-slide-media-container">
							<img class="scrolly-slide-media" src={card.value} alt={`Image for slide ${index}`} />
						</div>
					{:else if card.type === 'video'}
						<div class="scrolly-slide-media-container">
							<video
								class="scrolly-slide-media"
								src={card.value}
								autoplay
								loop
								muted
								alt={`Image for slide ${index}`}
							/>
						</div>
					{:else}
						<span class="scrolly-slide-text">
							{@html card.value}
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
		position: relative;
	}

	@media (min-width: 800px) {
		section {
			display: grid;
			grid-template-columns: 2fr 5fr;
		}
	}

	.scrolly-annotations {
		font-size: 1.2rem;
	}

	@media (min-width: 800px) {
		.scrolly-annotations {
			background: black;
		}
	}

	.scrolly-annotation {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150vh;
		max-width: min(100%, 500px);
		margin: auto;
	}

	.scrolly-annotation-text {
		background: rgb(0, 0, 0, 0.8);
		color: white;
		margin: 0 20px;
		z-index: 1;
	}

	.scrolly-slides-outer {
		height: 100%;
		position: relative;
	}

	@media (max-width: 800px) {
		.scrolly-slides-outer {
			width: 100%;
			top: 0;
			position: absolute;
		}
	}

	.scrolly-slides {
		position: sticky;
		top: 0;
		height: 100vh;
	}

	.scrolly-slide {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		opacity: 0;
		transition: opacity 0.5s;
		width: 100%;
		overflow: hidden;
	}

	.visible {
		opacity: 1;
	}

	.scrolly-slide-media-container {
		height: 100%;
		width: 100%;
	}

	.scrolly-slide-media {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	.scrolly-slide-text {
		margin: 0 20px;
		max-width: 600px;
	}
</style>
