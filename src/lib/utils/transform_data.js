export const IS_IMAGE = /^\S+\.gif|jpe?g|tiff?|png|webp|bmp$/is
export const IS_VIDEO = /^\S+\.gif|jpe?g|tiff?|png|webp|bmp$/is
export const GDRIVE_LINK = /^https:\/\/drive\.google\.com\/file\/d\/([-\w]{25,}(?!.*[-\w]{25,}))/is
export const YOUTUBE_LINK = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/is
export const VIMEO_LINK = /^.*vimeo\.com\/([^#\&\?]*).*/is

function is_url(url) {
  try {
    new URL(url).toString();
    return true;
  } catch {
    return false;
  }
}

async function is_image(src) {
  return new Promise((resolve, reject) => {
    const node = document.createElement("img");
    node.src = src;

    node.onload = () => {
      node.remove();
      resolve('image')
    };

    node.onerror = () => {
      node.remove();
      reject(`${src} is not an image.`)
    };
  });

}

function is_video(src) {
  return new Promise((resolve, reject) => {
    const node = document.createElement("video");
    node.src = src;

    function handleSuccess() {
      node.remove();
      resolve('video')
    };

    function handleError() {
      node.remove();
      reject(`${src} is not a video.`)
    };

    node.onloadedmetadata = handleSuccess;
    node.onerror = handleError;
  });
}

async function guess_type(slide) {
  try {
    const type = await Promise.any([is_image(slide), is_video(slide)])
    return type;
  } catch (e) {
    return 'text';
  }
}

function clean_slide(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key.toLowerCase().trim(), (value || '').trim()]))
}

function derive_type(type, slide) {
  if (IS_IMAGE.test(slide)) return 'image'
  if (IS_VIDEO.test(slide)) return 'video'
  if (YOUTUBE_LINK.test(slide)) return 'iframe'
  if (VIMEO_LINK.test(slide)) return 'iframe'
  if (type) return type;
  if (!is_url(slide)) return 'text';
  return undefined;
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

export default async function data_to_props(doc) {
  let slides = doc?.slides || doc?.Slides || [];

  slides = slides.map(async s => {
    let { annotation, caption, 'alt-text': alt_text, slide, type } = clean_slide(s);

    slide = fix_bad_slides(slide);
    type = derive_type(type, slide);
    if (!type) type = guess_type(slide);

    return { annotation, slide, type, caption, alt_text }
  });

  slides = await Promise.all(slides);
  slides = slides.filter(({ annotation }) => annotation);

  let title = doc?.title || '';
  let credit = doc?.credit || '';

  return { slides, title, credit }
}