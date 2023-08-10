const express = require('express');

const app = express();

const PORT = 3001

app.get('/', (req, res) => {
    res.send('Hello hello!')
})

app.get('/greeting', (req, res) => {
    res.send('Hello stranger!')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}! is so great to see you!`)
})

app.listen(PORT, () => {
    console.log('Server listening on port 3001');
});