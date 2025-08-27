const readlineSync = require('readline-sync');

let saldo = 1000.00; // saldo inicial

console.log("Código da Operação:");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");

const operacao = readlineSync.questionInt("Escolha a operação (1, 2 ou 3): ");

switch (operacao) {
    case 1:
        console.log("Operação - Saldo");
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    case 2:
        const valorSaque = readlineSync.questionFloat("Valor do saque: R$ ");
        console.log("Operação - Saque");
        if (valorSaque > saldo) {
            console.log("Saldo Insuficiente!");
        } else {
            saldo -= valorSaque;
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;
    case 3:
        const valorDeposito = readlineSync.questionFloat("Valor do depósito: R$ ");
        console.log("Operação - Depósito");
        saldo += valorDeposito;
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        break;
    default:
        console.log("Operação Inválida!");
        break;
}
