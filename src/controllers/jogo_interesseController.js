var jogo_interessemodel = require("../models/jogo_interesseModel");


function verJogos(req, res) {
    var idUsuario = req.params.idUsuario;
  
    jogo_interessemodel.verJogos(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }


  module.exports = {
    verJogos
  }