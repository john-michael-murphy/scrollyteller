import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';

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
		{
			generateBundle(options, bundle) {
				const p = JSON.parse(fs.readFileSync("./package.json", "utf8"))
				delete p.devDependencies
				delete p.scripts;
				fs.writeFileSync("./dist/package.json", JSON.stringify(p, null, 2))
			}
		}
	]
}