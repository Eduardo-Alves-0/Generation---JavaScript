const inputUser = require('readline-sync')

// Variável para acumular a soma dos números positivos
let somaPositivos = 0
let number

do {
    number = inputUser.questionInt('Digite um número: ')

    if (number > 0) {
        somaPositivos += number
    }

} while (number !== 0)

console.log(`A soma dos números positivos é: ${somaPositivos}`)
