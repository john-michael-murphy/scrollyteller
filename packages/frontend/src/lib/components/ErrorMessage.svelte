<script>
	export let error;
	const errorString = error?.message ?? error;
</script>

<section id="error">
	<code>
		{errorString}
	</code>
</section>

<style>
	code {
		all: unset;
		display: block;
		background: var(--sfe-black70);
		padding: 10px;
		border-radius: 3px;
		font-size: 1rem;
	}
</style>
