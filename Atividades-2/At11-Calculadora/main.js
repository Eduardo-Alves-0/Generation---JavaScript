const readlineSync = require('readline-sync');

const numero1 = parseFloat(readlineSync.question('Digite o 1º número: '));
const numero2 = parseFloat(readlineSync.question('Digite o 2º número: '));

const operacao = parseInt(readlineSync.question('Operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão): '));

let resultado;

switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${resultado}`);
        break;
    case 2:
        resultado = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${resultado}`);
        break;
    case 3:
        resultado = numero1 * numero2;
        console.log(`${numero1} * ${numero2} = ${resultado}`);
        break;
    case 4:
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log(`${numero1} / ${numero2} = ${resultado}`);
        } else {
            console.log('Divisão por zero não é permitida.');
        }
        break;
    default:
        console.log('Operação inválida!');
}
