const readlineSync = require('readline-sync'); // importando a biblioteca

const salarioBase = readlineSync.questionInt('Digite seu salário: R$ ');
const adicionalNoturno = readlineSync.questionInt('Digite o valor do adicional noturno: R$ ');
const horaExtra = readlineSync.questionInt('Digite o valor das horas extras: R$ ');
const descontos = 300; // quis deixar esse valor como padrão

const salarioLiquido = salarioBase + adicionalNoturno + (horaExtra * 5) - descontos;

console.log(`\n Detalhes do seu salário:`);
console.log(`Salário base: R$ ${salarioBase}`);
console.log(`Adicional noturno: R$ ${adicionalNoturno}`);
console.log(`Horas extras: R$ ${horaExtra}`);
console.log(`Descontos: R$ ${descontos}`);
console.log(`\n Seu salário líquido é: R$ ${salarioLiquido}\n`);

if (salarioLiquido >= 3000) {
    console.log('Uau! Você tem um ótimo salário líquido!');
} else if (salarioLiquido >= 1500) {
    console.log('Seu salário está razoável, continue se esforçando!');
} else {
    console.log('Seu salário está baixo, é hora de pensar em oportunidades de crescimento.');
}
