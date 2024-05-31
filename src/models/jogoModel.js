
var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT * FROM jogo`;

  return database.executar(instrucaoSql);
}


module.exports = {listar};
