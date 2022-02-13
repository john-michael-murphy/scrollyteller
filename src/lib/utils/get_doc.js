export default async function fetch_doc(id) {
  const res = await fetch(`https://docs.google.com/document/d/e/${id}/pub`);
  const html = await res.text();
  const dom = new DOMParser().parseFromString(html, 'text/html');
  const doc = dom.querySelector("div#contents > div");
  return doc.outerHTML;
}
