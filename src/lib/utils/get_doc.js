export default async function fetch_doc(id) {
  if (!id) throw new Error(`Missing id from query string.`)
  const base = 'https://docs.google.com/document/d';
  const path = id?.startsWith("2PACX") ? `e/${id}/pub` : `${id}/pub`
  const url = `${base}/${path}`;
  const res = await fetch(url);
  const html = await res.text();
  const dom = new DOMParser().parseFromString(html, 'text/html');
  const doc = dom.querySelector("div#contents > div");
  return doc.outerHTML;
}
