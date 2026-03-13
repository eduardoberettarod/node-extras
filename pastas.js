const fs = require('fs')
const fsextra = require('fs-extra')

let pasta = 'fotos'

console.log("\n\n===== verificando pasta =====")
if (fs.existsSync(pasta)) {
    console.log('Tudo certo!')
} else {
    console.log('A pasta não existe')
}

console.log("\n\n===== criando pasta =====")
pasta = 'icones/ilustracoes/redessociais'

if (!fs.existsSync(pasta)) {
    fs.mkdirSync(pasta, { recursive: true })
    console.log("pasta criada")
} else {
    console.log("pasta já existe")
}

console.log("\n\n===== listando conteúdo da pasta =====")
pasta = 'icones'
console.log(fs.readdirSync(pasta))

console.log("\n\n===== renomeando pasta =====")
try {
    fs.renameSync('icones', 'icons')
    console.log("pasta renomeada")
} catch (erro) {
    console.log("não foi renomeada")
}

const folder = 'icons'

console.log("\n\n===== excluindo pasta =====")
fsextra.remove(folder, erro => {
    console.error(erro)
})