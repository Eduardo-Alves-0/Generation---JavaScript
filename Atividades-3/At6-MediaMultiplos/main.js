const inputUser = require("readline-sync");

let multiplicarNumeros = 1;
let numeroEncontrado = false;

let number;

do {
  number = inputUser.questionInt("Digite um número: ");

  if (number !== 0 && number % 3 === 0) {
    multiplicarNumeros *= number;
    numeroEncontrado = true;
  }
} while (number !== 0);

if (numeroEncontrado) {
  console.log(
    "O resultado da multiplicação dos múltiplos de 3 é:",
    multiplicarNumeros
  );
} else {
  console.log("Nenhum múltiplo de 3 foi digitado.");
}
