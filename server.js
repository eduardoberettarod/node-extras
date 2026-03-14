require('dotenv').config()
const express = require('express')
const app = express()
const carros = require('./frota')


app.get("/", (req, res) => {
    res.send()
})

carros.fnListarCarros()
carros.fnCadastrarCarro({ marca: 'Fiat', modelo: 'Palio' })
carros.fnListarCarros()

console.log("servidor rodando na porta " + process.env.PORTA)
app.listen(process.env.PORTA)