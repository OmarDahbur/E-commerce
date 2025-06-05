var database = require("../database/config");

function salvarPreferencias(categoria, tom, estilo, idCliente) {

    var instrucaoSql = `
    INSERT INTO produto (categoria, tom, estilo) VALUES
    ('${categoria}', '${tom}', '${estilo}');`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql).then((resultado1) => {
        var preferenciaSql = `INSERT INTO preferencia (fkProduto, fkCliente) VALUES
        (${resultado1.insertId} , ${idCliente});`;
        return database.executar(preferenciaSql);
    });
}

module.exports = {
   salvarPreferencias
};