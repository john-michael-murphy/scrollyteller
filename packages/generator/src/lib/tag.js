/**
 * @param {Record<any, any>} props
 * @returns {string}
 */
export function create_script_tag(props) {
  const id = `scrolly-${Math.floor(Math.random() * 1e8)}`
  return `<div id='${id}'></div>
  <script type="module">(await import('https://unpkg.com/scroll-n-tell@0.0.0-alpha.3/index.js')).render(${JSON.stringify(props)},document.getElementById('${id}'));</script>`
}