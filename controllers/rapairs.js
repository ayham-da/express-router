var rapairs = require('../data/rapairs')

function rapairsController(req, res) {
    res.json(rapairs)
}

function rapairController(req, res) {
    var rapairId = req.params.id
    var rapair = rapairs[rapairId]
    res.json(rapair)
}

exports.rapairs = rapairsController
exports.rapair = rapairController