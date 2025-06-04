var database = require("../database/config");

function salvarPreferencias(categoria, tom, estilo, idCliente) {

    var instrucaoSql = `
    INSERT INTO produto (categoria, tom, estilo) VALUES
    ('${categoria}', '${tom}', '${estilo}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   salvarPreferencias
};