const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const talks = []

app.use(bodyParser.json())

app.get('/talk', (req, res) => {
    res.json(talks)
})

app.post('/talk', (req, res) => {
    const { title, summary, message, messageForCommitte, language, type, track } = req.body
    talks.push({title, summary, message, messageForCommitte, language, type, track})
    res.sendStatus(201)
})

app.listen(3000, () => console.log('running at 3000'))