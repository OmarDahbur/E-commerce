var preferenciaModel = require("../models/preferenciaModel");

function salvarPreferencias(req, res) {
    var idCliente = req.body.idCliente;
    var categoria = req.body.categoria;
    var tom = req.body.tom;
    var estilo = req.body.estilo;

    if (!idCliente || !categoria || !tom || !estilo) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    preferenciaModel.salvarPreferencias(idCliente, categoria, tom, estilo).then((resultado) =>
    res.json(resultado)).catch((erro) => {
        console.log("Erro ao salvar preferências:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
    
}

module.exports = {
    salvarPreferencias
};