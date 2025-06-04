var preferenciaModel = require("../models/preferenciaModel");

function salvarPreferencias(req, res) {
    const { idCliente, categoria, tom, estilo} = req.body;

        if (!idCliente || !categoria || !tom || !estilo) {
            return res.status(400).send(`Dados incompletos para salvar preferência.`);
        }


    preferenciaModel.cadastrarPreferencias(idCliente , categoria, tom, estilo).then(resultado => {
        res.status(200).json({ mensagem: "Preferência salva com sucesso!"});
    }).catch(erro => {
        console.log(erro);
        console.log("Erro ao salvar preferências:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    salvarPreferencias
};