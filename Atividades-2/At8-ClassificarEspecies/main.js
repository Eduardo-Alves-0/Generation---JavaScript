const readlineSync = require('readline-sync');

// Função para normalizar entrada (remove acentos e coloca em minúsculo)
function normalizeInput(input) {
    return input.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const filo = normalizeInput(readlineSync.question('Digite o filo (Vertebrado/Invertebrado): '));
const classe = normalizeInput(readlineSync.question('Digite a classe (Ave/Mamífero/Inseto/Anelídeo): '));
const alimentacao = normalizeInput(readlineSync.question('Digite o tipo de alimentação (Carnívoro/Onívoro/Herbívoro/Hematófago): '));

let animal = '';

if (filo === 'vertebrado') {
    if (classe === 'ave') {
        if (alimentacao === 'carnivoro') {
            animal = 'Águia';
        } else if (alimentacao === 'onivoro') {
            animal = 'Pomba';
        }
    } else if (classe === 'mamifero') {
        if (alimentacao === 'onivoro') {
            animal = 'Homem';
        } else if (alimentacao === 'herbivoro') {
            animal = 'Vaca';
        }
    }
} else if (filo === 'invertebrado') {
    if (classe === 'inseto') {
        if (alimentacao === 'hematofago') {
            animal = 'Pulga';
        } else if (alimentacao === 'herbivoro') {
            animal = 'Lagarta';
        }
    } else if (classe === 'anelideo') {
        if (alimentacao === 'hematofago') {
            animal = 'Sanguessuga';
        } else if (alimentacao === 'onivoro') {
            animal = 'Minhoca';
        }
    }
}

console.log(`\tAnimal escolhido:\t${animal}`);

