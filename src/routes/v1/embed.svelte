<script>
	import Scrollyteller from '$lib/Scrollyteller.svelte';
	export let mock;
</script>

<body>
	<Scrollyteller {mock} />
</body>

<style>
	body {
		all: unset;
		display: block;
	}
</style>
