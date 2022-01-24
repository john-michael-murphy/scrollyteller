<script>
	import CopyIcon from './CopyIcon.svelte';

	export let snippet;
	let copied = false;
	let timeoutRef;

	const onClick = () => {
		navigator.clipboard.writeText(snippet);
		copied = true;
		if (timeoutRef) clearTimeout(timeoutRef);
		timeoutRef = setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<button on:click={onClick}>
	<span>{copied ? 'Copied' : 'Copy'}<CopyIcon /></span>
	<div>
		<code>{snippet}</code>
	</div>
</button>

<style>
	button {
		all: unset;
		position: relative;
		background-color: var(--sfe-black00);
		border-radius: 5px;
		display: block;
		color: white;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;
		padding: 15px;
		max-width: 100%;
		box-sizing: border-box;
	}

	button:hover {
		background-color: var(--sfe-black40);
	}

	code {
		all: unset;
		font-weight: 300;
		font-size: 1rem;
		white-space: pre;
		position: relative;
	}

	span {
		all: unset;
		font-size: 1rem;
		font-weight: 500;
		fill: white;
		display: flex;
		align-items: center;
		column-gap: 5px;
		justify-content: flex-end;
		margin-bottom: 5px;
	}

	div {
		overflow-x: scroll;
	}
</style>
