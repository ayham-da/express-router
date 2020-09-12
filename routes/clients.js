var express = require('express')
var clients = require('../data/clients')
var clientrouter = express.Router()
var clientController = require('../controllers/clients')


clientrouter.get('/', clientController.clients)

clientrouter.get('/:id', clientController.client)

clientrouter.post('/new')

module.exports = clientrouter



