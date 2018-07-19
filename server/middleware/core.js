const cookieParser = require('cookie-parser')
const express = require('express')

function createCore(server) {
	server.use(cookieParser())
	server.use(express.json())
	server.use(express.urlencoded({ extended: true }))
}

module.exports = createCore
