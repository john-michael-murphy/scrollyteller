import { readFileSync } from "fs";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * @param {Record<any, any>} props
 * @returns {string}
 */
export function create_script_tag(props) {
  const id = `scrolly-${Math.floor(Math.random() * 1e8)}`
  const json = JSON.stringify(props);
  const { version } = JSON.parse(readFileSync(resolve(__dirname, '../../../../scrollyteller/package.json'), 'utf8'));

  return readFileSync(`${__dirname}/snippet.html`, "utf8")
    .replaceAll("$ID", id)
    .replaceAll("$JSON", json)
    .replaceAll("$VERSION", version);
}