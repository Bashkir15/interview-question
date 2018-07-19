const coreMiddleware = require('./core')
const errorMiddleware = require('./error')
const fallbackMiddleware = require('./fallback')

module.exports = {
	coreMiddleware,
	errorMiddleware,
	fallbackMiddleware
}
