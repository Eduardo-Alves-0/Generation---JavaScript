const readlineSync = require('readline-sync');

const numero = readlineSync.questionInt('Digite um número inteiro: ');

if (numero % 2 === 0) {
  console.log('O número é par.');
} else {
  console.log('O número é ímpar.');
}

if (numero > 0) {
  console.log('O número é positivo.');
} else if (numero < 0) {
  console.log('O número é negativo.');
} else {
  console.log('O número é zero.');
}
