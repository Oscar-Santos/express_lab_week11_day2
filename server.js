const express = require('express');

const app = express();

const PORT = 3001

const responses = require('./models/responses')

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

// Magic 8 Ball

app.get('/magic/:question', (req, res) => {
    const random = Math.floor(Math.random() * responses.length)
    res.send(`<h1>${req.params.question}</h1> <br/> <h2>${responses[random]}</h2>`)
})







app.listen(PORT, () => {
    console.log('Server listening on port 3001');
});