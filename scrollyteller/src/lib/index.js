const js = 'INJECTED_JS';
const css = 'INJECTED_CSS';

export function render(props, element) {
	if (!element) {
		throw new Error(`scrollyteller: The element provided does not exist.`);
	}

	const style = document.createElement('style');
	style.innerHTML = css;

	const script = document.createElement('script');
	script.setAttribute("type", "module");
	const id = `scrollyteller-${Math.round(Math.random() * 1000000)}`;

	script.innerHTML = `
		${js}
		new Scrollyteller({
			target: document.querySelector('#${id}'),
			props: ${JSON.stringify(props)},
			hydrate: false,
		})
	`;

	const html = document.createElement('div');
	html.id = id;

	element.prepend(style);
	element.prepend(html);
	element.prepend(script);
}