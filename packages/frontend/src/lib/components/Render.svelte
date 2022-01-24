<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { TEMPLATE_ID } from '../consts';
	import { GOOGLE_FILE_ID } from '../doc/patterns';

	let inputEl;

	onMount(() => {
		const id = new URLSearchParams(window.location.search).get('id');

		if (id) {
			inputEl.value = id;
		}
	});

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
</script>

<form on:submit={onSubmit}>
	<input bind:this={inputEl} type="text" name="id" placeholder={TEMPLATE_ID} required />
	<input type="submit" value="create" />
</form>

<style>
	form {
		display: flex;
		column-gap: 10px;
		margin: 20px 0;
		flex-grow: 1;
		max-width: 1200px;
	}

	form input[type='text'] {
		all: unset;
		border-radius: 5px;
		border: 1px solid var(--sfe-black50);
		flex-grow: 1;
		padding: 7px 5px 3px 5px;
		background-color: white;

		font-size: 1.2rem;
		display: inline-block;
		font-weight: 300;
		color: var(--sfe-black20);
		text-indent: 5px;
		line-height: 1.7rem;
	}

	form input[type='submit'] {
		all: unset;
		cursor: pointer;
		padding: 6px 10px 4px 10px;
		border-radius: 5px;
		color: white;
		transition: background 0.2s ease-in-out;
		font-weight: 300;
		background: var(--sfe-black40);
	}

	form input[type='submit']:hover {
		background: var(--sfe-black00);
	}
</style>
