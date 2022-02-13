<script>
	import { TEMPLATE_ID } from '../ui/constants';
	import GithubLogo from '../ui/GithubLogo.svelte';
	import Instructions from '../ui/Instructions.svelte';

	let doc_id = TEMPLATE_ID;
	// let snippet;

	// function get_snippet(id) {
	// 	let url = new URL(window.location.href);
	// 	const embed_url = new URL(`/render?id=${id}`, url.origin);
	// 	snippet = `<iframe frameborder="0" width="100%" height="100vh" src="${embed_url}" />`;
	// }
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<body>
	<main>
		<nav>
			<a rel="external" href="https://github.com/john-michael-murphy/scrollyteller"
				><GithubLogo /></a
			>
		</nav>
		<h1>scrollyteller</h1>
		<h2>scroll-driven storytelling</h2>
		<p>
			Scrollyteller is a tool generates scrollable slides from google docs. Lorem ipsum dolor sit
			amet, consectetur adipiscing elit. In lacinia mattis felis ut sagittis.
		</p>
		<h3>Instructions</h3>
		<Instructions {doc_id} />
	</main>
	<footer>
		<p>Made by John-Michael Murphy and Dr. Suzanne Churchill</p>
	</footer>
</body>

<style>
	:root {
		--sfe-black00: #212529;
		--sfe-black10: #3d4652;
		--sfe-black20: #343a40;
		--sfe-black30: #495057;
		--sfe-black40: #6c757d;
		--sfe-black50: #adb5bd;
		--sfe-black60: #ced4da;
		--sfe-black70: #dee2e6;
		--sfe-black80: #e9ecef;
		--sfe-gutter: 30px;
		font-family: 'Overpass';
		color: var(--sfe-black10);
	}

	body {
		all: unset;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	main {
		display: block;
		margin: var(--sfe-gutter);
	}

	nav {
		flex-direction: row-reverse;
		display: flex;
	}

	nav a {
		display: contents;
	}

	h1 {
		all: unset;
		display: block;
		font-size: 3rem;
		font-weight: 500;
		color: var(--sfe-black10);
	}

	h2 {
		all: unset;
		display: block;
		font-size: 2rem;
		font-weight: 300;
		color: var(--sfe-black40);
		margin-bottom: 15px;
	}

	h3 {
		all: unset;
		display: block;
		font-size: 1.7rem;
		font-weight: 300;
		color: var(--sfe-black20);
		margin-top: 40px;
		margin-bottom: 15px;
	}

	p {
		all: unset;
		display: block;
		color: var(--sfe-black30);
		font-weight: 200;
		font-size: 1.1rem;
		line-height: 1.3;
	}

	footer {
		padding: 20px var(--sfe-gutter);
		background: var(--sfe-black20);
	}

	footer p {
		all: unset;
		color: white;
		font-size: 14px;
		width: 100%;
		display: block;
		text-align: center;
	}
</style>
