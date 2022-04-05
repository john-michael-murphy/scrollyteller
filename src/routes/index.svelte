<script>
	import GithubIcon from '../ui/GithubIcon.svelte';
	import Instructions from '../ui/Instructions.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<body>
	<main>
		<nav>
			<a rel="external" href="https://github.com/john-michael-murphy/scrollyteller">
				<GithubIcon />
			</a>
		</nav>
		<h1>scrollyteller</h1>
		<h2>scroll-driven storytelling</h2>
		<p>
			Scrollyteller is a tool generates scrollable slides from google docs. Lorem ipsum dolor sit
			amet, consectetur adipiscing elit. In lacinia mattis felis ut sagittis.
		</p>
		<h3>Instructions</h3>
		<Instructions />
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
		--sfe-font-family: 'Roboto', sans-serif;
		font-family: var(--sfe-font-family);
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
	}

	footer p {
		all: unset;
		font-size: 12px;
		width: 100%;
		display: block;
		text-align: center;
		color: var(--sfe-black20);
	}
</style>
