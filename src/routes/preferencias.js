var express = require("express");
var router = express.Router();

var preferenciaController = require("../controllers/preferenciaController");

router.post("/salvar", function (req, res) {
    preferenciaController.buscarPreferenciasUsuario(req, res);
});

module.exports = router;