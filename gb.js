const os = require('os')

console.log("Faça um programa que calcule e mostre em GB quanto de memória tem livre.");

let memoriaLivre = os.freemem() / 1024 / 1024 / 1024

console.log(memoriaLivre.toFixed(2) + " GB")