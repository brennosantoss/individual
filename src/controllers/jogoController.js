var jogoModel = require("../models/jogoModel");


function listar(req, res) {
  jogoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}



module.exports = {
  listar
};
