var database = require("../database/config");

function inserirJogos(id,fkjogo) {
  var instrucaoSql = `insert into jogo_interesse (fkusuario,fkjogo,nivel)= '${id}' , ${fkjogo}, ${nivel}`;

  return database.executar(instrucaoSql);
}

function verJogos() {
  var instrucaoSql = `SELECT * FROM jogo_interesse`;

  return database.executar(instrucaoSql);
}


module.exports = { inserirJogos, verJogos };
