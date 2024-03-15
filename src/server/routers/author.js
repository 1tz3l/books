const express = require('express');
const author = express.Router();

author.post('/authors', (req, res) => {
    res.sendStatus(200);
});

author.update('/authors:id', (req, res) => {
    res.sendStatus(200)
});

author.delete('/authors:id', (req, res)=> {
    res.sendStatus(200)
});

module.exports = author;