import svelte from 'rollup-plugin-svelte';
import { uglify } from 'rollup-plugin-uglify';

export default {
	input: 'src/index.js',
	output: {
		format: 'esm',
		file: 'dist/index.js',
		name: 'Scrollyteller'
	},
	plugins: [
		svelte({ emitCss: false }),
		// uglify(),
	]
}