var database = require("../database/config");

function buscarPreferenciasUsuario(idCliente) {

    var instrucaoSql = `
    SELECT p.categoria, p.tom, p.estilo FROM preferencia pr JOIN produto p ON pr.fkProduto = p.idProduto WHERE pr.fkCliente = ${idCliente};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDistribuicaoCategoria() {
    var instrucaoSql = `SELECT p.categoria, COUNT(*) AS total
    FROM preferencia pr JOIN produto p ON pr.fkProduto = p.idProduto
    GROUP BY p.categoria;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDistribuicaoTom() {
    var instrucaoSql = `SELECT p.tom, COUNT(*) AS total
    FROM preferencia pr JOIN produto p ON pr.fkProduto = p.idProduto
    GROUP BY p.tom;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDistribuicaoEstilo() {
    var instrucaoSql = `SELECT p.estilo, COUNT(*) AS total
    FROM preferencia pr JOIN produto p ON pr.fkProduto = p.idProduto
    GROUP BY p.estilo;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPreferenciasUsuario,
    buscarDistribuicaoCategoria,
    buscarDistribuicaoTom,
    buscarDistribuicaoEstilo
};