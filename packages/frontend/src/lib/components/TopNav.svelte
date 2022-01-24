<script>
	import GithubLogo from './GithubLogo.svelte';
</script>

<nav>
	<a href="/"><span>Home</span></a>
	<a href="/example"><span>Example</span></a>
	<a href="https://github.com/john-michael-murphy/scrollyteller"><GithubLogo /></a>
</nav>

<style>
	nav {
		height: 75px;
		display: flex;
		justify-content: flex-end;
		column-gap: 15px;
		align-items: center;
		color: var(--sfe-black20);
		fill: var(--sfe-black20);
	}

	a {
		all: unset;
		display: inline-block;
		cursor: pointer;
	}

	a span {
		text-decoration: underline;
	}

	a:hover span {
		text-decoration: none;
	}
</style>
