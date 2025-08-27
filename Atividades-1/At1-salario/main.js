const readlineSync = require('readline-sync')

const salarioBase = readlineSync.questionInt('Informe o seu salário base: R$ ')
const salarioAdicional = readlineSync.questionInt('Informe o valor do abono/adicional: R$ ')

const soma = salarioBase + salarioAdicional

console.log(`\nResumo do cálculo:`)
console.log(`➡️ Salário base: R$ ${salarioBase.toFixed(2)}`)
console.log(`➡️ Abono/Adicional: R$ ${salarioAdicional.toFixed(2)}`)
console.log(`-------------------------------------`)
console.log(`💰 Novo salário com adicional: R$ ${soma.toFixed(2)}`)
