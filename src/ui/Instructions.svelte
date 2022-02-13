<script>
	export let template_id;
	import Snippet from './CodeSnippet.svelte';
</script>

<ol>
	<li>
		<p>
			<a target="blank" rel="external nofollow" href={`${template_id}/copy`}>Make a copy </a> of the
			scrollyteller
			<a target="blank" rel="external nofollow" href={`${template_id}`}>template document</a>.
		</p>
	</li>
	<li>
		<p>
			Customize the document. Make sure to follow the <a
				target="blank"
				rel="external nofollow"
				href="http://archieml.org/">patterns</a
			>.
		</p>
	</li>
	<li>
		<p>
			<a
				target="blank"
				rel="external nofollow"
				href="https://support.google.com/a/users/answer/9308873">Share the document</a
			> so that anyone on the internet with the link can view.
		</p>
	</li>
	<li>
		<p>Paste the share link in the field below and click create.</p>
	</li>
	<li>
		<p>Use this link to</p>
	</li>
	<li>
		<p>Copy the generated code snippet and paste it into your website html.</p>
	</li>
</ol>

<style>
	p {
		display: inline;
	}
	ol {
		all: unset;
		list-style: decimal;
		list-style-position: inside;
		display: block;
	}

	li {
		font-weight: bold;
	}

	li p {
		padding-left: 5px;
	}

	a {
		color: var(--sfe-black20);
	}
</style>
