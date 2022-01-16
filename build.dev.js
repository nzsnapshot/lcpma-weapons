const { build } = require('esbuild')

build({
	entryPoints: ['./client/main.ts'],
	outfile: './dist/client/main.js',
	minify: false,
	bundle: true,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('Client Build Failed:', error)
			else console.log('Client Build Succeeded')
		},
	}
}).catch(() => process.exit(1))

build({
	entryPoints: ['./server/main.ts'],
	outfile: './dist/server/main.js',
	minify: false,
	bundle: true,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('Server Build Failed:', error)
			else console.log('Server Build Succeeded')
		},
	}
}).catch(() => process.exit(1))