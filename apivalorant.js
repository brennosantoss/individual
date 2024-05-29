

const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3000;

// Servindo arquivos estáticos na pasta "public"
app.use(express.static('public'));

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

// // Iniciando o servidor
// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}`);
// });

