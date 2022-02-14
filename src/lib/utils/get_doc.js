export default async function fetch_doc(id) {
  const base = 'https://docs.google.com/document/d';
  const path = id?.startsWith("2PACX") ? `e/${id}/pub` : `${id}/pub`
  const res = await fetch(`${base}/${path}`);
  const html = await res.text();
  const dom = new DOMParser().parseFromString(html, 'text/html');
  const doc = dom.querySelector("div#contents > div");
  return doc.outerHTML;
}
