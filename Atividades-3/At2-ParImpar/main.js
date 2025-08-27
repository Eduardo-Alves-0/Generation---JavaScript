const inputUser = require('readline-sync')
const inputNumber = []

let pares = 0
let impares = 0

for(let i = 0; i < 10; i++){
    const number = inputUser.questionInt('Digite um número: ')
    inputNumber[i] = number
}
for(let i = 0; i < inputNumber.length; i++){
    if(inputNumber[i] % 2 === 0){
        pares++
    }else{
        impares++
    }
}

console.log(`O número de pares é de: ${pares}`)
console.log(`O número de impares é de: ${impares}`)