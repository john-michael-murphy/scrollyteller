import fetch_doc from "$lib/doc/fetch.js";
import archieml from "$lib/doc/archieml.js";
import transform from "$lib/doc/transform.js";

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
    const output = await fetch_doc(id);
    const archie = await archieml(output);
    const props = await transform(archie);

    return {
      status: 200,
      body: props,
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