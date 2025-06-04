var database = require("../database/config");

function cadastrarPreferencias(idCliente, categoria, tom, estilo) {

    var instrucaoSql = `
    INSERT INTO preferencia (fkCliente, categoria, tom, estilo) VALUES
    (${idCliente}, '${categoria}', '${tom}', '${estilo}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   cadastrarPreferencias
};