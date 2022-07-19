<script>
	import { onMount } from 'svelte';

	let offline = false;
	let timeoutRef;

	function checkConnection() {
		timeoutRef = setTimeout(() => {
            offline = !window.navigator.onLine;
			checkConnection();
		}, 2000);

		return () => clearTimeout(timeoutRef);
	}

	onMount(() => checkConnection());
</script>

<section>
    {#if offline}
        <span>Offline. Please connect to the internet.</span>
    {:else}
        <slot />
    {/if}
</section>

<style>
    	section {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;

        font-size: 16px;
        font-family: var(--scrolly-serif);
	}
</style>