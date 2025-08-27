const readlineSync = require('readline-sync');

const codigo = readlineSync.questionInt('Digite o código do produto (1 a 6): ');
const quantidade = readlineSync.questionInt('Digite a quantidade: ');

let produto = '';
let precoUnitario = 0;

switch(codigo) {
    case 1:
        produto = 'Cachorro Quente';
        precoUnitario = 10.00;
        break;
    case 2:
        produto = 'X-Salada';
        precoUnitario = 15.00;
        break;
    case 3:
        produto = 'X-Bacon';
        precoUnitario = 18.00;
        break;
    case 4:
        produto = 'Bauru';
        precoUnitario = 12.00;
        break;
    case 5:
        produto = 'Refrigerante';
        precoUnitario = 8.00;
        break;
    case 6:
        produto = 'Suco de laranja';
        precoUnitario = 13.00;
        break;
    default:
        console.log('Código inválido!');
        process.exit(); 
}

const valorTotal = quantidade * precoUnitario;

console.log('\nProduto:', produto);
console.log('Valor total: R$', valorTotal.toFixed(2));
