import Scrollteller from './Scrollyteller.svelte';

export function render(props, element) {
	return new Scrollteller({
		target: element,
		props: props,
	});
}