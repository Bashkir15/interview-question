const express = require('express')
const getRoot = require('app-root-dir').get
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const compiler = webpack(webpackConfig)

const userRoutes = require('./routes')

const {
	coreMiddleware,
	errorMiddleware,
	fallbackMiddleware
} = require('./middleware')

const ROOT = getRoot()
const buildPath = path.join(ROOT, 'build')
const templatePath = `${buildPath}/index.html`

function createServer() {
	const server = express()
	errorMiddleware(server)
	coreMiddleware(server)

	// server static
	//fallbackMiddleware(server)

	server.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: webpackConfig.output.publicPath
	}))
	server.use(require('webpack-hot-middleware')(compiler))
	server.use(express.static(buildPath))
	server.get('/', (req, res, next) => {
		res.sendFile(path.join(Root, templatePath))
	})
	server.use('/users', userRoutes)
	return server
}

module.exports = createServer
