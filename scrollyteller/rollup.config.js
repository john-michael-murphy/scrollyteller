import { writeFileSync, readFileSync } from 'fs';
import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
	// 1. generate the JS/CSS we need in the client
	{
		input: 'package/Scrollyteller.svelte',
		output: {
			file: 'package/tmp/Scrollyteller.js',
			format: 'iife',
			name: 'Scrollyteller'
		},
		plugins: [
			nodeResolve(),
			svelte({
				compilerOptions: {
					hydratable: true
				}
			}),
			css({
				output: 'Scrollyteller.css'
			}),
			{
				generateBundle(options, bundle) {
					const entry = 'package/index.js';

					// 2. inject it into the entry point
					writeFileSync(
						entry,
						readFileSync(entry, 'utf8')
							.replace(`'INJECTED_JS'`, () => JSON.stringify(bundle['Scrollyteller.js'].code))
							.replace(`'INJECTED_CSS'`, () => JSON.stringify(bundle['Scrollyteller.css'].source))
					);
				}
			}
		]
	},

	// 3. bundle the entry point, so the consumer doesn't need
	//    to know anything about the component implementation
	{
		input: 'package/index.js',
		output: {
			file: 'dist/index.js',
			format: 'esm'
		},
		plugins: [
			nodeResolve(),
			svelte({
				compilerOptions: {
					generate: 'ssr'
				},
				emitCss: false
			})
		]
	}
];
