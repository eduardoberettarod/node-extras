console.log("Faça um programa que registre as informações do sistema")

const os = require('os')
const fs = require('fs')

let hostname = os.hostname()
let totalMemoria = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
let sistemaOperacional = os.version()
let tipoSistema = os.type()
let usuarioAtivo = os.userInfo().username

let cpus = os.cpus()
let quantCpu = cpus.length
let modeloCpu = cpus[0].model

let novoRegistro = [
    "Hostname: " + hostname,
    "Memoria Total (GB): " + totalMemoria,
    "Sistema Operacional: " + sistemaOperacional,
    "Tipo do Sistema: " + tipoSistema,
    "Usuario Ativo: " + usuarioAtivo,
    "Quantidade de CPUs: " + quantCpu,
    "Modelo da CPU: " + modeloCpu
]

try {

    fs.writeFileSync(`registro_${hostname}.txt`, novoRegistro.join('\n'))

    console.log("Novo registro criado!")

} catch (erro) {

    console.log("Erro: " + erro)

}