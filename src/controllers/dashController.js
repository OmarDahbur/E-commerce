var dashModel = require("../models/dashModel");

function buscarPreferenciasUsuario(req, res) {

    var idCliente = req.params.idCliente;



    dashModel.buscarPreferenciasUsuario(idCliente).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarDistribuicaoGeral(req, res) {
    dashModel.buscarDistribuicaoGeral().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhuma distribuição encontrada!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Erro ao buscar distribuição geral:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarPreferenciasUsuario,
    buscarDistribuicaoGeral
};