const { build } = require('esbuild')

build({
  entryPoints: ['./client/main.ts'],
  outfile: './dist/client/main.js',
  minify: false,
  bundle: true,
}).catch(() => process.exit(1))

build({
	entryPoints: ['./server/main.ts'],
	outfile: './dist/server/main.js',
	minify: false,
	bundle: true,
}).catch(() => process.exit(1))