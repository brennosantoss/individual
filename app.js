
// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;


const axios = require('axios');


var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");
var jogo_interesse = require("./src/routes/jogo_interesse")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);
app.use("/jogo_interesse" , jogo_interesse)

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});

//API Valorant

// Endpoint para obter dados dos agentes
app.get('/api/agents', async (req, res) => {
    try {
        const response = await axios.get('https://valorant-api.com/v1/agents?language=pt-BR');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Erro ao obter dados dos agentes');
    }
});

// Endpoint para obter dados dos mapas
app.get('/api/maps', async (req, res) => {
    try {
        const response = await axios.get('https://valorant-api.com/v1/maps');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Erro ao obter dados dos mapas');
    }
});

// Endpoint para obter dados das armas
app.get('/api/weapons', async (req, res) => {
    try {
        const response = await axios.get('https://valorant-api.com/v1/weapons');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Erro ao obter dados das armas');
    }
});

// Rota para servir o arquivo HTML específico
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'valorant.html'));
});



