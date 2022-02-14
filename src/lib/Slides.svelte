<script>
	import Slide from '$lib/Slide.svelte';
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
	href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
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
		--scrolly-sans: 'Overpass', sans-serif;
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
		position: relative;
		background: white;
		font-family: var(--scrolly-sans);
	}

	@media (min-width: 800px) {
		section {
			display: grid;
			grid-template-columns: minmax(325px, 3fr) 7fr;
		}
	}

	.scrolly-annotations {
		background: black;
	}

	.scrolly-annotation {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 150vh;
		max-width: min(100%, 500px);
		margin: auto;
		white-space: pre-wrap;
	}

	.scrolly-annotation-text {
		background: rgb(0, 0, 0, 0.8);
		color: white;
		padding: 10px;
		z-index: 1;
		font-size: 20px;
		border-radius: 3px;
		line-height: 24px;
		font-weight: 300;
		margin: 10px;
	}

	@media (max-width: 800px) {
		.scrolly-annotation-text {
			font-size: 16px;
			line-height: 20px;
		}

		.scrolly-annotations {
			background: transparent;
		}
	}

	@media (max-width: 800px) {
		.scrolly-annotation-text {
			font-size: 16px;
			line-height: 20px;
		}
	}

	.scrolly-annotation-text :global(a) {
		color: white;
	}
	.scrolly-annotation-text :global(a:hover) {
		text-decoration: none;
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
		margin: 0 20px;
	}

	.scrolly-slide {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		opacity: 0;
		transition: all 0.75s;
		overflow: hidden;
		pointer-events: none;
	}

	.scrolly-visible {
		opacity: 1;
		pointer-events: auto;
	}
</style>
