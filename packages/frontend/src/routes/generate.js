import fetch_doc from "$lib/doc/fetch.js";
import archieml from "$lib/doc/archieml.js";
import transform from "$lib/doc/transform.js";
import { create_script_tag } from '$lib/snippet.js';
import { GOOGLE_FILE_ID } from "../lib/doc/patterns.js";

/** @type {import("@sveltejs/kit").RequestHandler} */
export async function get({ url }) {
  let id = url.searchParams.get('id');

  if (!id) {
    return {
      status: 403,
      body: 'Missing query parameter: "/generate/{{google_doc_id}}"'
    }
  }

  id = GOOGLE_FILE_ID.exec(id)?.[0]

  if (!id) {
    return {
      status: 403,
      body: 'Invalid Google Doc Id. Try copying and pasting the URL again.'
    }
  }

  try {

    const output = await fetch_doc(id);
    const archie = await archieml(output);
    const { slides = [] } = await transform(archie);

    if (!slides.length) {
      return {
        status: 403,
        body: 'No slides found. This is likely because the Google Doc is empty or malformated.'
      }
    }


    const snippet = await create_script_tag({ slides });

    return {
      status: 200,
      body: { slides, snippet },
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
      body: message
    }
  }
}