const fs = require('fs')
const dados = fs.readFileSync('brasileirao_serie_a_times.csv', 'utf8')
console.log(dados)