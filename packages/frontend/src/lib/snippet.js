const snippet = `<div id='$ID' style="min-height:100vh;width:100vw;></div>
<script type="module">
  import * as Scrollyteller from 'https://unpkg.com/scroll-n-tell@^$VERSION/index.js';
  const props = $JSON;
  Scrollyteller.render(props, document.getElementById('$ID'));
</script>`

export async function create_script_tag(props) {
  const id = `scrolly-${Math.floor(Math.random() * 1e8)}`
  const json = JSON.stringify(props);
  const { default: { version } } = await import('scroll-n-tell/package.json')

  return snippet
    .replace(/\$ID/g, id)
    .replace(/\$JSON/g, json)
    .replace(/\$VERSION/g, version);
}