const inputUser = require("readline-sync");

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const entradaUsuario = inputUser.questionInt("Digite um numero: ");

let encontrado = false;

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === entradaUsuario) {
    console.log(`O número ${entradaUsuario} está localizado na posição: ${i}`);
    encontrado = true;
    break;
  }
}

if (!encontrado) {
  console.log(`O número ${entradaUsuario} não foi encontrado!`);
}
