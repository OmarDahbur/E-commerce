var database = require("../database/config");

function buscarPreferenciasUsuario(idCliente) {

    var instrucaoSql = `
    SELECT p.categoria, p.tom, p.estilo FROM preferencia pr JOIN produto p ON pr.fkProduto = p.idProduto WHERE pr.fkCliente = ${idCliente};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDistribuicaoGeral() {
    var instrucaoSql = `SELECT p.categoria, p.tom, p.estilo, COUNT(*) AS total
    FROM preferencia pr JOIN produto p ON pr.fkProduto = p.idProduto
    GROUP BY p.categoria, p.tom, p.estilo;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPreferenciasUsuario,
    buscarDistribuicaoGeral
};