var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/dados/:idCliente", function (req, res) {
    dashController.buscarDadosCliente(req, res);
});

module.exports = router;