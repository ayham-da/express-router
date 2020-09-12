var express = require('express')
var rapairs = require('../data/rapairs')
var rapairrouter = express.Router()
var rapairController = require('../controllers/rapairs')


rapairrouter.get('/', rapairController.rapairs)

rapairrouter.get('/:id', rapairController.rapair )

rapairrouter.post('/new')

module.exports = rapairrouter