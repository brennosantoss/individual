var database = require("../database/config");

function inserirJogos(idjogo,fkjogo,nivel) {
  var instrucaoSql = `insert into jogo_interesse (fkusuario,fkjogo,nivel)= '${idjogo}' , ${fkjogo}, ${nivel}`;

  return database.executar(instrucaoSql);
}

function verjogos() {
  var instrucaoSql = `SELECT * FROM jogo_interesse`;

  return database.executar(instrucaoSql);
}


module.exports = { inserirJogos, verjogos };
