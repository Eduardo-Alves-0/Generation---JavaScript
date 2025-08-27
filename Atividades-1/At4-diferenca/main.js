const readlineSync = require('readline-sync');

const n1 = parseFloat(readlineSync.question('Digite o valor de n1: '));
const n2 = parseFloat(readlineSync.question('Digite o valor de n2: '));
const n3 = parseFloat(readlineSync.question('Digite o valor de n3: '));
const n4 = parseFloat(readlineSync.question('Digite o valor de n4: '));

const diferenca = (n1 * n2) - (n3 * n4);

console.log(`\nDiferença do produto: ${diferenca.toFixed(2)}`);
