var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/usuario/:idCliente", function (req, res) {
    dashController.buscarPreferenciasUsuario(req, res);
});

router.get("/distribuicao", function (req, res) {
    dashController.buscarDistribuicaoGeral(req, res);
});

module.exports = router;