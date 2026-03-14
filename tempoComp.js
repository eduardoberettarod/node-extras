const os = require('os')

console.log("Faça um programa que calcule e mostre em minutos e em horas quanto tempo o computador está ligado.");

let tempoLigado = os.uptime()

let minutos = tempoLigado / 60
let horas = tempoLigado / 60 / 60

console.log("Tempo ligado em minutos: " + minutos.toFixed(2))
console.log("Tempo ligado em horas: " + horas.toFixed(2))