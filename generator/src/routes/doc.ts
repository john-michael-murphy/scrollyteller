import type { RequestHandler } from "@sveltejs/kit";
import * as Doc from "$lib/Doc";

export const get: RequestHandler = async ({ query }) => {
  let id = query.get('id');

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
    const output = await Doc.read(id);

    const slides = output.slides || output.Slides

    output.slides = slides.map(s => {
      const slide = s.slide || s.Slide;
      const annotation = s.annotation || s.Annotation;
      return { slide, annotation }
    });

    output.slides.map(async s => {
      s

    })

    return {
      status: 200,
      body: output,
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