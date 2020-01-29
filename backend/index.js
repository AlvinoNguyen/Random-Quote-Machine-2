const express = require('express');
const path = require('path');

const app = express();

app.get('/', (request, response) => {
    response.sendFile(path.resolve('../index.html'));
});

app.get('/styles.css', (request, response) => {
    response.sendFile(path.resolve('../styles.css'));
});

app.get('/main.js', (request, response) => {
    response.sendFile(path.resolve('../main.js'));
});

app.get('/images/twitter.svg', (request, response) => {
    response.setHeader('Content-Type', 'image/svg+xml');
    response.sendFile(path.resolve('../images/twitter.svg'));
});

app.get('/images/instagram.svg', (request, response) => {
    response.setHeader('Content-Type', 'image/svg+xml');
    response.sendFile(path.resolve('../images/instagram.svg'));
});

app.listen(3000);