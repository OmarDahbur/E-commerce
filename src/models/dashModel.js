var database = require("../database/config");

function buscarPreferenciasUsuario(idCliente) {

    var instrucaoSql = `
    SELECT categoria, tom, estilo FROM preferencia WHERE fkCliente = ${idCliente};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDistribuicaoGeral() {
    var instrucaoSql = `SELECT categoria, tom, estilo, COUNT(*) AS total
    FROM preferencia
    GROUP BY categoria, tom, estilo;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPreferenciasUsuario,
    buscarDistribuicaoGeral
};