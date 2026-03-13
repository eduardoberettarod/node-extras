const fs = require('fs')

const estadosBrasil = [
    "11 - Rondônia - RO",
    "12 - Acre - AC",
    "13 - Amazonas - AM",
    "14 - Roraima - RR",
    "15 - Pará - PA",
    "16 - Amapá - AP",
    "17 - Tocantins - TO",
    "21 - Maranhão - MA",
    "22 - Piauí - PI",
    "23 - Ceará - CE",
    "24 - Rio Grande do Norte - RN",
    "25 - Paraíba - PB",
    "26 - Pernambuco - PE",
    "27 - Alagoas - AL",
    "28 - Sergipe - SE",
    "29 - Bahia - BA",
    "31 - Minas Gerais - MG",
    "32 - Espírito Santo - ES",
    "33 - Rio de Janeiro - RJ",
    "35 - São Paulo - SP",
    "41 - Paraná - PR",
    "42 - Santa Catarina - SC",
    "43 - Rio Grande do Sul - RS",
    "50 - Mato Grosso do Sul - MS",
    "51 - Mato Grosso - MT",
    "52 - Goiás - GO",
    "53 - Distrito Federal - DF"
];

let arquivo = "estados-brasileiros"

try {

    fs.writeFileSync(`${arquivo}.txt`, estadosBrasil.join("\n"))
    console.log("Arquivo criado!")

} catch (erro) {
    console.log("Erro Aqui::::::" + erro)
}

const dados = fs.readFileSync('estados-brasileiros.txt', 'utf8')
console.log(dados)