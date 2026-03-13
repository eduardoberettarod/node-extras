const fs = require('fs')

let novoCliente = 'João da Silva\n'
// fs.writeFile('clientes.txt', novoCliente, erro => {
//     if (erro) {
//         console.log(erro)
//         return
//     }
//     console.log("Novo cliente!")
// })

novoCliente = 'Regina George\n'
fs.appendFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.log(erro)
        return
    }
    console.log("+1 cliente!")
})

fs.readFile('clientes.txt', 'utf8', (erro, dados) => {
    if (erro) {
        console.log(erro)
        return
    }
    console.log(dados)
})
console.log("Bem vindo!")