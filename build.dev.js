const { build } = require('esbuild')
const fetch = require('node-fetch');

function onRebuild() {
	// We have an api to restart resources on build on debug builds
	if (process.env.PMA_RESTART_KEY) {
		fetch(`http://127.0.0.1:4689/rr?resource=${"lcpma-weapons"}`, {
			method: 'GET',
			headers: {
				['x-api-key']: process.env.PMA_RESTART_KEY
			}
		})
	}
}

build({
	entryPoints: ['./client/main.ts'],
	outfile: './dist/client/main.js',
	minify: false,
	bundle: true,
	watch: {
		onRebuild(error, result) {
			if (error) console.error('Client Build Failed:', error)
			else {
				onRebuild()
				console.log("Client build succeeded")
			}
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
			else {
				onRebuild()
				console.log('Server Build Succeeded')
			}
		},
	}
}).catch(() => process.exit(1))