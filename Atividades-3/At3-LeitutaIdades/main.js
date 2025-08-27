const inputUser = require('readline-sync')

let idadeMenos21 = 0
let idadeMaior50 = 0

// while começa com zero para não travar a bagaça toda
while (true) {
    let idade = inputUser.questionInt('Digite uma idade (ou um número negativo para parar): ')

    if (idade < 0) { // condição de parada
        break
    }

    if (idade < 21) {
        idadeMenos21++
    } else if (idade > 50) {
        idadeMaior50++
    }
}
console.log(`Quantidade de pessoas com idade menor que 21: ${idadeMenos21}`)
console.log(`Quantidade de pessoas com idade maior que 50: ${idadeMaior50}`)
