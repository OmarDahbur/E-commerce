var database = require("../database/config");

function buscarPreferenciasDoCliente(idCliente) {

    var instrucaoSql = `
    SELECT 
       p.categoria, p.tom, p.estilo,
       COUNT(*) AS totalCompras FROM vendas v
       JOIN produto p ON v.fkProduto = p.idProduto
       WHERE v.fkCliente = ${idCliente}
       GROUP BY p.categoria, p.tom, p.estilo
       ORDER BY totalCompras DESC
       LIMIT 3`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPreferenciasDoCliente
};