<script>
	import { TEMPLATE_ID } from '$lib/consts';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function onSubmit(e) {
		e.preventDefault();
		const id = e.target.id.value;
		const url = new URL(window.location.href);
		if (id) {
			url.searchParams.set('id', e.target.id.value);
		} else {
			url.searchParams.delete('id');
		}

		goto(url.href, { noscroll: true, keepfocus: true });
	}

	let inputEl;
	onMount(() => {
		const id = new URLSearchParams(window.location.search).get('id');

		if (id) {
			inputEl.value = id;
		}
	});
</script>

<section>
	<ol class="scrolly-container">
		<li>
			<p>
				<a target="blank" rel="nofollow" href={`${TEMPLATE_ID}/copy`}>Make a copy </a> of the template.
			</p>
		</li>
		<li>
			<p>Edit the copied document.</p>
		</li>
		<li>
			<p>
				<a href="https://support.google.com/a/users/answer/9308873">Share the document</a> so that anyone
				on the internet with the link can view.
			</p>
		</li>
		<li>
			<p>Paste the document URL below and click create.</p>
			<form on:submit={onSubmit}>
				<input bind:this={inputEl} type="text" name="id" placeholder={TEMPLATE_ID} />
				<input type="submit" value="create" class="scrolly-button" />
			</form>
		</li>
	</ol>

	<a id="scroll-down" href="#preview">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 24 24"
			height="44px"
			viewBox="0 0 24 24"
			width="44px"
			fill="#000000"
			><g><rect fill="none" height="24" width="24" /></g><g
				><g
					><polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41" /><polygon
						points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19"
					/></g
				></g
			></svg
		>
	</a>
</section>

<style>
	section {
		height: 100vh;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 6px 23px -8px rgba(0, 0, 0, 0.75);
		z-index: 1;
	}

	ol {
		margin: 20px 40px;
		padding: 0;
	}

	form {
		display: flex;
		column-gap: 10px;
		margin: 20px 0;
		flex-grow: 1;
		max-width: 1200px;
	}

	p {
		font-size: 1.2rem;
	}

	form input[type='text'] {
		all: unset;
		font-size: 1rem;
		border-radius: 5px;
		border: 1px solid #ccc;
		flex-grow: 1;
		padding: 4px;
		box-shadow: 2px 2px 18px -5px rgba(0, 0, 0, 0.75);
		background-color: white;
	}

	section #scroll-down {
		position: absolute;
		display: block;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 10px 0;
		animation-name: bounce;
		animation-timing-function: ease;
		animation-iteration-count: infinite;
		animation-duration: 2s;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		30% {
			transform: translateY(-10px);
		}
		50% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
