const inputUser = require('readline-sync')

const numero1 = inputUser.questionInt('Insira um número: ')
const numero2 = inputUser.questionInt('Insira outro número: ')
const numero3 = inputUser.questionInt('Insira outro número: ')

if (numero1 + numero2 > numero3){
    console.log ('É maior')
} else if (numero1 + numero2 === numero3){
    console.log('É igual ')
} else if (numero1 + numero2 < numero3){
    console.log('É menor')
}