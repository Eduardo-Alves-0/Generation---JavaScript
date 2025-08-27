const readlineSync = require('readline-sync');

const nota1 = readlineSync.questionInt('Digite sua primeira nota: ');
const nota2 = readlineSync.questionInt('Digite sua segunda nota: ');
const nota3 = readlineSync.questionInt('Digite sua terceira nota: ');
const nota4 = readlineSync.questionInt('Digite sua quarta nota: ');

const media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`\nSuas notas foram: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);
console.log(`Sua média final é: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log('Parabéns! Você foi aprovado!');
} else {
    console.log('Você está de recuperação. Continue se esforçando!');
}
