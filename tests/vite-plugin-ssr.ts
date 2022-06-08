import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'brillout/vite-plugin-ssr',
		branch: '0.4.0',
		beforeInstall: 'setup', // Needed for submodule initialization
		build: 'build',
		test: 'test'
	})
}
