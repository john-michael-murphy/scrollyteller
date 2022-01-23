import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'src/index.js',
	output: {
		format: 'esm',
		file: 'dist/index.js',
		name: 'Scrollyteller'
	},
	plugins: [
		nodeResolve(),
		svelte({ emitCss: false }),
	]
}