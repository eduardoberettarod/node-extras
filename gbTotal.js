const os = require('os')

console.log("Faça um programa que calcule e mostre em GB quanto de memória tem total.");

let memoriaTotal = os.totalmem() / 1024 / 1024 / 1024

console.log(memoriaTotal.toFixed(2) + " GB")