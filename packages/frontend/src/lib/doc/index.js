import archieml from "./archieml.js";
// import transform from "./transform.js";
import fetch from "./fetch.js";


export default async function generate_props_from_doc(id) {

  const doc = await fetch(id);
  console.log(doc)
  const archie = await archieml(doc);

  // const { slides = [] } = await transform(archie);
  console.log(archie)
  // if (!slides.length) {
  //   throw new Error('No slides found. This is likely because the Google Doc is empty or malformated.');
  // }

  // return { slides, id };
}