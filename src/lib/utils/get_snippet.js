export default function get_snippet(embed_url, script_url) {
    const iframed_embed_url = new URL(embed_url)
    iframed_embed_url.searchParams.set('iframe', 'true')

    return `<iframe frameborder="0" style="width:100%;height:400px;" src="${iframed_embed_url.href}" /></iframe>\n<script src="${script_url}"></script>`
}