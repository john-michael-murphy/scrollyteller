const IS_IMAGE = /^\S+\.gif|jpe?g|tiff?|png|webp|bmp$/is
const IS_VIDEO = /^\S+\.gif|jpe?g|tiff?|png|webp|bmp$/is
const GDRIVE_LINK = /^https:\/\/drive\.google\.com\/file\/d\/([-\w]{25,}(?!.*[-\w]{25,}))/is
const YOUTUBE_LINK = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/is
const VIMEO_LINK = /^.*vimeo\.com\/([^#\&\?]*).*/is

function clean_slide(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key.toLowerCase().trim(), (value || '').trim()]))
}

function derive_type(type, slide) {
  if (IS_IMAGE.test(slide)) return 'image'
  if (IS_VIDEO.test(slide)) return 'video'
  if (YOUTUBE_LINK.test(slide)) return 'iframe'
  if (VIMEO_LINK.test(slide)) return 'iframe'
  if (type) return type;
  return 'text';
}

function fix_bad_slides(text) {
  if (GDRIVE_LINK.test(text)) {
    const [, fileId] = text.match(GDRIVE_LINK)
    return `https://drive.google.com/uc?id=${fileId}`;
  }

  if (YOUTUBE_LINK.test(text)) {
    const [, , fileId] = text.match(YOUTUBE_LINK)
    return `<iframe src="https://www.youtube.com/embed/${fileId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  if (VIMEO_LINK.test(text)) {
    const [, fileId] = text.match(VIMEO_LINK);
    return `<iframe src="https://player.vimeo.com/video/${fileId}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`
  }

  return text;
}

export default async function transform(doc) {
  let slides = doc?.slides || doc?.Slides || [];

  slides = slides.map(s => {
    let { annotation, caption, 'alt-text': alt_text, slide, type } = clean_slide(s);

    type = derive_type(type, slide);
    slide = fix_bad_slides(slide);

    return { annotation, slide, type, caption, alt_text }
  }).filter(({ annotation }) => annotation);

  return { slides }
}