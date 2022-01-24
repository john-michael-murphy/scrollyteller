import fetch from "node-fetch"
import * as patterns from "./patterns.js"

function is_url(url) {
  try {
    new URL(url).toString();
    return true;
  } catch {
    return false;
  }
}

async function guess_content_type(slide) {
  try {
    const { headers } = await fetch(slide, { method: 'GET', redirect: 'follow' });
    const type = headers.get('content-type')?.split?.('/')?.[0];
    if (['image', 'video'].includes(type)) {
      return type;
    }

    return false;
  } catch (e) {
    return false;
  }
}

function clean_slide(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key.toLowerCase().trim(), (value || '').trim()]))
}

async function derive_type(type, slide) {
  if (patterns.IS_IMAGE.test(slide)) return 'image'
  if (patterns.IS_VIDEO.test(slide)) return 'video'
  if (patterns.YOUTUBE_LINK.test(slide)) return 'iframe'
  if (patterns.VIMEO_LINK.test(slide)) return 'iframe'
  if (type) return type;
  if (is_url(slide)) {
    const guessed_typed = await guess_content_type(slide);
    if (guessed_typed) return guessed_typed;
  }

  return 'text';
}

function fix_bad_slides(text) {
  if (patterns.GDRIVE_LINK.test(text)) {
    const [, fileId] = text.match(patterns.GDRIVE_LINK)
    return `https://drive.google.com/uc?id=${fileId}`;
  }

  if (patterns.YOUTUBE_LINK.test(text)) {
    const [, , fileId] = text.match(patterns.YOUTUBE_LINK)
    return `<iframe src="https://www.youtube.com/embed/${fileId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  if (patterns.VIMEO_LINK.test(text)) {
    const [, fileId] = text.match(patterns.VIMEO_LINK);
    return `<iframe src="https://player.vimeo.com/video/${fileId}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
  }

  return text;
}

export default async function transform(doc) {
  let slides = doc?.slides || doc?.Slides || [];

  slides = slides.map(async s => {
    let { annotation, caption, 'alt-text': alt_text, slide, type } = clean_slide(s);

    slide = fix_bad_slides(slide);
    type = await derive_type(type, slide);

    return { annotation, slide, type, caption, alt_text }
  });

  slides = await Promise.all(slides);
  slides = slides.filter(({ annotation }) => annotation);

  return { slides }
}