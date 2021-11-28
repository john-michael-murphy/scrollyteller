import url from 'url';
import cheerio from 'cheerio';
import archieml from 'archieml';

const sanitize = (str: string) => str.replace(/<\/?(strong|em|u)>/g, '');

const clean = (object: any): any => {
  if (Array.isArray(object)) {
    return object.map(clean);
  }

  if (typeof object === 'object') {
    const cleaned: any = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in object) {
      if (key === 'type') {
        cleaned.type = sanitize(object[key]);
      } else {
        cleaned[sanitize(key)] = clean(object[key]);
      }
    }
    return cleaned;
  }

  return object;
};

export function parse(html: string): Record<any, any> {
  html = html.replace(/&nbsp;/g, ' ');
  const $ = cheerio.load(html);

  // remove all comments
  $('sup').each((i, el) => {
    const $sup = $(el);
    const $a = $sup.find('a');
    if ($a && $a.attr('href')?.startsWith('#cmnt')) {
      $sup.remove();
    }
  });

  // remove all bookmark links
  $('a').each((i, el) => {
    const $a = $(el);
    if (!$a.attr('href')) {
      $a.remove();
    }
  });

  // preserve formatting
  $('span').each((i, el) => {
    const $span = $(el);
    const style = $span.attr('style') || '';

    if (!/\S/.test($span.text())) {
      // don't wrap empty text
      $span.replaceWith($span.contents());
      return;
    }

    const tags = new Set(
      [
        style.includes('font-style:italic') && 'em',
        style.includes('font-weight:700') && 'strong',
        style.includes('text-decoration:underline') && 'u',
      ].filter(Boolean),
    );

    if ($span.children().length === 1 && $span.children().is('a')) {
      tags.delete('u');
    }

    tags.forEach((tag) => {
      const prefix = $(`<span>&lt;${tag}&gt;</span>`).contents();
      const suffix = $(`<span>&lt;/${tag}&gt;</span>`).contents();
      $span.prepend(prefix).append(suffix);
    });

    $span.replaceWith($span.contents());
  });

  // remove google tracking from links
  $('a').each((i, el) => {
    const $a = $(el);
    const parsed = url.parse($a.attr('href') || '');
    const params = new URLSearchParams(parsed.query || '');

    $a.prepend(`&lt;a href="${params.get('q')}"&gt;`).append('&lt;/a&gt;');
    $a.replaceWith($a.contents());
  });

  // replace lists with their contents
  $('ul, ol').each((i, el) => {
    const $ul = $(el);
    const $replaced = $('<p/>');

    $ul.find('li').each((innerI, innerEl) => {
      const $li = $(innerEl);
      $li.append('\n');
      $replaced.append($li.contents());
    });

    // if list doesn't have surrounding start/end directives, add them now
    const $prev = $ul.prev();
    const $next = $ul.next();

    if (!$prev.text().startsWith('start:') && !$next.text().startsWith('end:')) {
      $('<p>start: .g-list-circle</p>').insertBefore($ul);
      $('<p>end: .g-list-circle</p>').insertAfter($ul);
    }

    $ul.replaceWith($replaced);
  });

  const text = $('body > *')
    .map((i, el) => $(el).text())
    .toArray();

  return clean(archieml.load(text.join('\n')));
}