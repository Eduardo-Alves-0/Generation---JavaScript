const inputUser = require('readline-sync');

const nome = inputUser.question('Informe seu nome: ');
const idade = inputUser.questionInt('Informe sua idade: ');


const respostas = {
  true: 'Sim',
  false: 'Não'
};

const primeiraVez = respostas[inputUser.keyInYN('É a primeira vez?')];
const jaDoou = respostas[inputUser.keyInYN('Você já doou antes?')];


let apto;
if (idade > 18 && idade < 69) {
  apto = 'Está apto para doar';
} else {
  apto = 'Não está apto a doar';
}

console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Primeira vez doador? ${primeiraVez}`);
console.log(`Já doou antes? ${jaDoou}`);
console.log(`Status de doação: ${apto}`);

