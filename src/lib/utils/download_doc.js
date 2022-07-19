import archieml from 'archieml';

function parse_html(html) {
  // handle white space entities
  html = html.replace(/&nbsp;/g, ' ');

  const node = new DOMParser().parseFromString(html, 'text/html');
  // const node = dom.querySelector("div#contents > div");

  // remove all comments
  node.querySelectorAll('sup').forEach((el) => {
    const a = el.querySelector('a');
    if (a.getAttribute('href')?.startsWith("#cmnt")) {
      el.remove();
    }
  });

  // remove all bookmark links
  node.querySelectorAll('a').forEach((el) => {
    if (!el.getAttribute('href')) el.remove();
  });

  const text = [];

  node.querySelectorAll('p').forEach(el => text.push(el.innerText));

  const aml = text.join('\n');

  return archieml.load(aml);
}

const GOOGLE_FILE_ID = /[-\w]{25,}(?!.*[-\w]{25,})/is;
const PUBLISH_ID = /(?:\/)([-\w]*)(?:\/pub)$/is;

function get_doc_id(url) {
  const [file_id] = GOOGLE_FILE_ID.exec(url) || [];
  const [, public_id] = PUBLISH_ID.exec(url) || [];

  if (file_id) return file_id;
  if (public_id) return public_id
  throw new Error('Invalid Google Doc Link');
}

export default async function download_doc(link) {
  if (!link) throw new Error('No google doc provided.');

  const id = get_doc_id(link)
  const base = 'https://docs.google.com/document/d';
  const path = id?.startsWith("2PACX") ? `e/${id}/pub` : `${id}/pub`
  const url = `${base}/${path}`;
  
  const res = await fetch(url).catch(e => {
    console.error(e);
    throw new Error('Encountered an error when fetching Google Doc. Are you connected to the internet?')
  });

  const html = await res.text();

  if (res.status === 404) throw new Error('Cannot access Google Doc. Are you sure you published it to the web?');
  if (!res.ok) throw new Error(`Encountered an unknown error when fetching the Google Doc: ${res.status} ${res.statusText}`);

  try {
    return parse_html(html);
  } catch(e) {
    console.error(e);
    throw new Error(`Encountered an error when parsing the Google Doc: ${e.message}`)
  }
}
