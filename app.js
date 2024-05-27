// const express = require('express');
// const axios = require('axios');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Servindo arquivos estáticos na pasta "public"
// app.use(express.static('public'));

// // Endpoint para obter dados dos agentes
// app.get('/api/agents', async (req, res) => {
//     try {
//         const response = await axios.get('https://valorant-api.com/v1/agents?language=pt-BR');
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send('Erro ao obter dados dos agentes');
//     }
// });


// // Endpoint para obter dados dos mapas
// app.get('/api/maps', async (req, res) => {
//     try {
//         const response = await axios.get('https://valorant-api.com/v1/maps');
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send('Erro ao obter dados dos mapas');
//     }
// });

// // Endpoint para obter dados das armas
// app.get('/api/weapons', async (req, res) => {
//     try {
//         const response = await axios.get('https://valorant-api.com/v1/weapons');
//         const weapons = response.data.data;

//         // Traduzindo os nomes e descrições das armas para o português
//         const translatedWeapons = await Promise.all(weapons.map(async (weapon) => {
//             if (weapon.displayName && weapon.displayName.length > 0) {
//                 const nameTranslation = await translate(weapon.displayName, { to: 'pt' });
//                 weapon.displayName = nameTranslation.text;
//             }
//             if (weapon.description && weapon.description.length > 0) {
//                 const descriptionTranslation = await translate(weapon.description, { to: 'pt' });
//                 weapon.description = descriptionTranslation.text;
//             }
//             return weapon;
//         }));

//         res.json({ data: translatedWeapons });
//     } catch (error) {
//         res.status(500).send('Erro ao obter dados das armas');
//     }
// });


// // Iniciando o servidor
// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}`);
// });


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
        const response = await axios.get('https://valorant-api.com/v1/agents');
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

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

