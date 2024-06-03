var express = require("express");
var router = express.Router();

var jogo_interesseController = require("../controllers/jogo_interesseController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/inserirJogos", function (req, res) {
    jogo_interesseController.inserirJogos(req, res);
})

router.get("/verjogos", function (req, res) {
    jogo_interesseController.verJogos(req, res);
});

module.exports = router;

