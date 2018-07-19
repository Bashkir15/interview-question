const http = require('http')
const app = require('./server')()

const server = http.createServer(app)
server.listen(8081, () => {
	console.log('The application is up and running on localhost:8081')
})
