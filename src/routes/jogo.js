var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listar", function (req, res) {
    jogoController.listar(req, res);
})


module.exports = router;

