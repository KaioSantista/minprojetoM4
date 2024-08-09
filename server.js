const express = require('express');
const app = express();
const port = 3000;
const data = require('./data');

// Rota para obter sugestões de livros antirracistas
app.get('/antiracism-books', (req, res) => {
    res.json(data.antiracismBooks);
});

// Rota para obter dados sobre desmatamento na floresta amazônica
app.get('/amazon-deforestation', (req, res) => {
    res.json(data.amazonDeforestation);
});

// Rota para obter dados sobre ONGs sociais
app.get('/social-ngos', (req, res) => {
    res.json(data.socialNGOs);
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
