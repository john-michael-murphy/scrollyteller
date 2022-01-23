const snippet = `<div id='$ID'></div>
<script type="module">
  import * as Scrollyteller from 'https://unpkg.com/scroll-n-tell@^$VERSION/index.js';
  Scrollyteller.render($JSON, document.getElementById('$ID'));
</script>`

export async function create_script_tag(props) {
  const id = `scrolly-${Math.floor(Math.random() * 1e8)}`
  const json = JSON.stringify(props);
  const { default: { version } } = await import('scroll-n-tell/package.json')

  return snippet
    .replaceAll("$ID", id)
    .replaceAll("$JSON", json)
    .replaceAll("$VERSION", version);
}