<script>
	import Slide from './Slide.svelte';
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

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
	rel="stylesheet"
/>

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
			{#each slides as slide, index}
				<li
					class={`scrolly-slide scrolly-slide-${index}`}
					class:scrolly-visible={index === currIndex}
				>
					<Slide {...slide} />
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	:root {
		--scrolly-serif: 'Lora', serif;
		--scrolly-sans: 'Nunito', sans-serif;
		--scrolly-max-text-width: 600px;
		--scrolly-link-color: #003cbc;
	}

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
		font-family: var(--scrolly-sans);
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
		white-space: pre-wrap !important;
	}

	.scrolly-annotation-text {
		background: rgb(0, 0, 0, 0.8);
		color: white;
		padding: 10px;
		margin: 0 10px;
		z-index: 1 !important;
		font-size: 1.1rem;
		border-radius: 3px;
		line-height: 1.3rem;
		font-weight: 300;
	}

	.scrolly-annotation-text :global(a) {
		color: white;
	}
	.scrolly-annotation-text :global(a):hover {
		text-decoration: none;
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
		pointer-events: none;
	}

	.scrolly-visible {
		opacity: 1 !important;
		pointer-events: auto;
	}
</style>
