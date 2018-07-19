const usersData = require('./usersData')

module.exports = {
	get: (req, res) => {
		return res.json(usersData)
	}
}
