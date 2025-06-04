var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");
var preferenciaController = require("../controllers/preferenciaController");

router.get("/usuario/:idCliente", function (req, res) {
    dashController.buscarPreferenciasUsuario(req, res);
});

router.get("/distribuicao", function (req, res) {
    dashController.buscarDistribuicaoGeral(req, res);
});

router.post("/preferencias", function (req, res) {
    preferenciaController.salvarPreferencias(req,res);
});

module.exports = router;