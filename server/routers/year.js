const express = require('express');
const year = express.Router();

year.post('/year', (req, res) => {
    res.sendStatus(200);
});

year.update('/year', (req, res) => {
    res.sendStatus(200);
});

year.delete('/year', (req, res) => {
    res.sendStatus(200)
});

module.exports = year;