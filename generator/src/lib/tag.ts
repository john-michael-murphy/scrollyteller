export function createScriptTag(props: Record<any, any>): string {
  const id = `scrolly-${Math.floor(Math.random() * 1e8)}`
  return `<div id='${id}'></div><script type="module">(await import('https://unpkg.com/scroll-n-tell@0.0.0-alpha.1/index.js')).render(${JSON.stringify(props)},document.getElementById('${id}'));</script>`
}