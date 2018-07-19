const PrettyError = require('pretty-error')
const pretty = new PrettyError()

pretty.skipNodeFiles()
pretty.skipPackage('express')

function createError(server) {
	server.use((err, req, res, next) => {
		console.log(pretty.render(err))
		next()
	})
}

module.exports = createError
