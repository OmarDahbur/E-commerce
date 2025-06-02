var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/ultimas/:idUsuario", function (req, res) {
    dashController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    dashController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;