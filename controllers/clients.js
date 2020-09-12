var clients = require('../data/clients')

function clientsController(req, res) {
    res.json(clients)
}

function clientController(req, res) {
    var clientId = req.params.id
    var client = clients[clientId]
    res.json(client)
}

exports.clients = clientsController
exports.client = clientController