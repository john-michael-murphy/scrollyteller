<script type="ts">
	import { createScriptTag } from '$lib/tag';
	export let data;

	let snippet = createScriptTag(data);
	let copied = false;
	let timeoutRef;
</script>

<section>
	<ol start="5">
		<li>
			<p>Copy the code snippet and paste it into your website.</p>
			<div class="scrolly-code-container">
				<code>{snippet}</code>
				<button
					class="scrolly-button"
					on:click={() => {
						navigator.clipboard.writeText(snippet);
						copied = true;
						if (timeoutRef) clearTimeout(timeoutRef);
						timeoutRef = setTimeout(() => {
							copied = false;
						}, 2000);
					}}>{copied ? 'Copied' : 'Copy'}</button
				>
			</div>
		</li>
	</ol>
</section>

<style>
	ol {
		margin: 20px 40px;
		padding: 0;
	}

	section {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px -6px 23px -8px rgba(0, 0, 0, 0.75);
		z-index: 1;
	}

	.scrolly-code-container {
		position: relative;
	}

	.scrolly-code-container code {
		background: #fafafa;
		padding: 5px;
		border: 2px solid #ccc;
		border-radius: 3px;
	}

	code {
		display: block;
		max-width: 800px;
	}

	button {
		position: absolute;
		top: 10px;
		right: 10px;
	}

	button:hover {
		opacity: 1;
	}
</style>
