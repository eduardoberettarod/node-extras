const fs = require('fs')

let arquivo = "clientes"

let novoCliente = 'Juca Bala\n'
try {
    fs.writeFileSync(`${arquivo}.txt`, novoCliente)
    console.log("Novo cliente!")

} catch (erro) {
    console.log("Erro Aqui::::::" + erro)
}

novoCliente = 'Zé Rico\n'
try {
    fs.appendFileSync(`${arquivo}.txt`, novoCliente)
    console.log("+1 cliente!")

} catch (erro) {
    console.log("Erro Aqui::::::" + erro)
}

const dados = fs.readFileSync('clientes.txt', 'utf8')
console.log(dados)
console.log("Bem vindo!")