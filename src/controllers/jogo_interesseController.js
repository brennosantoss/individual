var jogo_interessemodel = require("../models/jogo_interesseModel");


function verniveis(req, res) {
    var fkusuario = req.query.fkusuario;
  
    jogo_interessemodel.verniveis(fkusuario).then((resultado) => {
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

  
function inserirjogos(req,res) {
    var nivel = req.body.nivelServer;
     var id = req.body.idServer;
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    jogo_interessemodel.inserirjogos(id,nivel)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    
  }

  function inserirpontosValorant(req,res) {
    var nivelvalorant = req.body.nivelvalorantServer;
     var id = req.body.idServer;
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    jogo_interessemodel.inserirpontosValorant(id,nivelvalorant)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    
  }





  function inserirpontoslol(req,res) {
    var nivellol = req.body.nivellolServer;
     var id = req.body.idServer;
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    jogo_interessemodel.inserirpontoslol(id,nivellol)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
    
  }



  module.exports = {
    verniveis,
    inserirjogos,
    inserirpontosValorant,
    inserirpontoslol
  
  }