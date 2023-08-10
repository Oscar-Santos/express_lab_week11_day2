const express = require('express');

const app = express();

const PORT = 3001

// greetings
app.get('/', (req, res) => {
    res.send('Hello hello!')
})

app.get('/greeting', (req, res) => {
    res.send('Hello stranger!')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}! is so great to see you!`)
})

// tip calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Your tip is $${req.params.total * req.params.tipPercentage / 100}`)
})






app.listen(PORT, () => {
    console.log('Server listening on port 3001');
});