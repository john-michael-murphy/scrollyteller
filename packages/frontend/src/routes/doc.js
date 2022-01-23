import fetch_doc from "$lib/doc/fetch.js";
import archieml from "$lib/doc/archieml.js";
import transform from "$lib/doc/transform.js";
import { create_script_tag } from '$lib/snippet.js';

/** @type {import("@sveltejs/kit").RequestHandler} */
export async function get({ url }) {
  let id = url.searchParams.get('id');

  if (!id) {
    return {
      status: 403,
      body: { message: 'Missing query parameter: "/doc?id={{google_doc_url}}"' }
    }
  }

  id = /[-\w]{25,}(?!.*[-\w]{25,})/.exec(id)?.[0];

  if (!id) {
    return {
      status: 403,
      body: { message: 'Invalid Google Doc Id. Try copying and pasting the URL again.' }
    }
  }

  try {
<<<<<<< HEAD:packages/frontend/src/routes/doc.js
    const output = await fetch_doc(id);
    const archie = await archieml(output);
    const props = await transform(archie);
    const snippet = await create_script_tag(props);
=======
    const output = await Doc.read(id);

    const slides = output.slides || output.Slides

    output.slides = slides.map(s => {
      const annotation = s.annotation || s.Annotation;
      const text = s.text || s.Text;
      if (text) return { slide: { value: text, type: 'text' }, annotation }
      const image = s.image || s.Image;
      if (image) return { slide: { value: image, type: 'image' }, annotation }
      const video = s.video || s.Video;
      if (video) return { slide: { value: video, type: 'video' }, annotation }
      return;
    }).filter(Boolean);
>>>>>>> 2acf84ed45c7cc500ad20b66a5a62daa34ed9faa:generator/src/routes/doc.ts

    return {
      status: 200,
      body: { props, snippet },
    };
  } catch (response) {
    const status = +response.code;
    let { message } = response;

    if (status === 404) {
      message =
        `${message} This is either becuase the file does not exist or is not shared correctly. Following these instructions should fix the problem: https://support.google.com/a/users/answer/9308873.`
    }

    return {
      status,
      body: { message }
    }
  }
}