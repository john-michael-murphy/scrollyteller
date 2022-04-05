<script>
	import { onMount } from 'svelte';

	const TEMPLATE_ID = '1TavVvjGEsgbP22xQ0elc_6_fxHIxjqyLXZhzEE3UA2k';
	const TEMPLATE_LINK = `https://docs.google.com/document/d/${TEMPLATE_ID}`;
	const GOOGLE_FILE_ID = /[-\w]{25,}(?!.*[-\w]{25,})/is;
	const PUBLISH_ID = /(?:\/)([-\w]*)(?:\/pub)$/is;

	let input;
	let embed_url = '';
	let snippet = '';

	onMount(() => set_id(TEMPLATE_ID));

	function handle_input() {
		const link = input.value;

		const [file_id] = GOOGLE_FILE_ID.exec(link) || [];
		const [, public_id] = PUBLISH_ID.exec(link) || [];

		let validity = '';
		if (file_id) {
			set_id(file_id);
		} else if (public_id) {
			set_id(public_id);
		} else if (!link) {
			set_id(TEMPLATE_ID);
		} else {
			validity = 'Invalid Google Doc Link';
		}

		input.setCustomValidity(validity);
		input.reportValidity();
	}

	function set_id(id) {
		const route = import.meta.env.DEV ? 'v1/embed' : 'v1/embed.html';
		embed_url = new URL(`/${route}?id=${id}`, window.location.origin).toString();
		snippet = `<iframe frameborder="0" style="width:100%;height:700px;display:block" src="${embed_url}" />`;
	}

	let copied = false;
	let timeoutRef;

	// function copy_snippet() {
	// 	navigator.clipboard.writeText(snippet);
	// 	copied = true;
	// 	if (timeoutRef) clearTimeout(timeoutRef);
	// 	timeoutRef = setTimeout(() => {
	// 		copied = false;
	// 	}, 2000);
	// }
</script>

<ol>
	<li>
		<p>
			<a target="blank" rel="external nofollow" href={`${TEMPLATE_LINK}/copy`}>Make a copy </a> of
			the scrollyteller
			<a target="blank" rel="external nofollow" href={TEMPLATE_LINK}>template document</a>.
		</p>
	</li>
	<li>
		<p>
			Customize the document. Make sure to follow the <a
				target="blank"
				rel="external nofollow"
				href="http://archieml.org/">template</a
			>.
		</p>
	</li>
	<li>
		<p>
			<a
				target="blank"
				rel="external nofollow"
				href="https://support.google.com/a/users/answer/9308870">Publish the document</a
			> as a website, so that anyone on the internet with the link can view it.
		</p>
	</li>
	<li>
		<p>Paste the document link below.</p>
		<form on:submit|preventDefault={handle_input}>
			<input
				type="text"
				name="link"
				class="border"
				placeholder={TEMPLATE_LINK}
				required
				bind:this={input}
				on:change|preventDefault={handle_input}
			/>
		</form>
	</li>
	<li>
		<p>Use this link to share your Scrollyteller.</p>
		<code class="border">{embed_url}</code>
		<p>Or, copy the html code snippet below and embed it into your website code.</p>
		<code class="border">{snippet}</code>
		<!-- <button class="button" href={embed_url} on:click={copy_snippet}>
			<span>{copied ? 'Copied' : 'Copy'}</span>
		</button> -->
	</li>
</ol>
<a class="button border" target="_blank" rel="external nofollow" href={embed_url}>Preview</a>

<style>
	ol {
		all: unset;
		list-style: decimal;
		list-style-position: inside;
		display: block;
		font-size: 20px;
	}

	li {
		font-weight: bold;
		padding-bottom: 15px;
	}

	p {
		padding-left: 5px;
		display: inline;
		font-weight: 300;
	}

	a {
		color: var(--sfe-black20);
	}

	a:hover {
		text-decoration: none;
	}

	input[type='text'] {
		font-family: var(--sfe-font-family);
		font-weight: 200;
		flex-grow: 1;
		background-color: white;

		font-size: 1.2rem;
		font-weight: 300;
		color: var(--sfe-black20);
		text-indent: 5px;

		display: block;
		width: 100%;
		max-width: 1200px;
		margin: 15px 0;
		box-sizing: border-box;
	}

	input[type='text']:focus {
		border-color: var(--sfe-black10);
	}

	input[type='text']::placeholder {
		color: var(--sfe-black50);
	}

	code {
		all: unset;
		display: block;
		font-weight: 300;
		font-size: 1.2rem;
		white-space: pre-wrap;
		min-height: 40px;
		color: var(--sfe-black10);
		box-sizing: border-box;
		margin: 10px 0 15px;
		max-width: 1200px;
	}

	.button {
		cursor: pointer;
		color: var(--sfe-black20);
		font-weight: 500;
		font-size: 1.2rem;
		text-decoration: none;
	}

	.button:hover {
		border-color: var(--sfe-black10);
	}

	.border {
		border-radius: 5px;
		padding: 10px;
		border: 1px solid var(--sfe-black50);
	}
</style>
