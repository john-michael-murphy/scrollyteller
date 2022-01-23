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
	section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fdfdfd;
		white-space: pre;
	}

	code {
		margin: 20px 40px;
		background: #ffebeb;
		padding: 5px;
		border: 2px solid #ccc;
		border-radius: 3px;
		font-size: 1rem;
	}
</style>
