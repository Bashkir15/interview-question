function createFallback(server) {
	server.use((req, res) => {
		res.status(404).send('Sorry, that resource was not found')
	})

	server.use((err, req, res, next) => {
		if (err) {
			console.log(err)
			console.log(err.stack)
		}
		res.status(500).send('Sorry, an unexpected error occurred')
	})
}

module.exports = createFallback
