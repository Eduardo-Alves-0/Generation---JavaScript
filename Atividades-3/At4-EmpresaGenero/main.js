const inputUser = require('readline-sync')

// Variáveis de contagem / global
let totalBackend = 0
let totalFrontendMulheres = 0
let totalMobileHomensMais40 = 0
let totalFullStackNaoBinariosMenos30 = 0
let totalPessoas = 0
let somaIdades = 0

let continuar = 'S'

while (continuar === 'S') {
    // Entrada de dados do colaborador
    let nome = inputUser.question('Informe seu nome: ')
    let idade = inputUser.questionInt('Informe sua idade: ')
    let generoCodigo = inputUser.questionInt(
        'Insira seu gênero (1-Mulher Cis, 2-Homem Cis, 3-Não Binário, 4-Mulher Trans, 5-Homem Trans, 6-Outros): '
    )
    let tipoDevCodigo = inputUser.questionInt(
        'Insira seu tipo de função (1-Backend, 2-Frontend, 3-Mobile, 4-FullStack): '
    )

    let genero
    switch (generoCodigo) {
        case 1: genero = 'Mulher Cis'; break
        case 2: genero = 'Homem Cis'; break
        case 3: genero = 'Não Binário'; break
        case 4: genero = 'Mulher Trans'; break
        case 5: genero = 'Homem Trans'; break
        case 6: genero = inputUser.question('Informe seu gênero: '); break
        default: genero = 'Não informado'; break
    }

    let tipoDev
    switch (tipoDevCodigo) {
        case 1: tipoDev = 'Backend'; break
        case 2: tipoDev = 'Frontend'; break
        case 3: tipoDev = 'Mobile'; break
        case 4: tipoDev = 'FullStack'; break
        default: tipoDev = 'Não informado'; break
    }

    // Armazenando no cacete da variável
    if (tipoDev === 'Backend') totalBackend++
    if (tipoDev === 'Frontend' && (genero === 'Mulher Cis' || genero === 'Mulher Trans')) totalFrontendMulheres++
    if (tipoDev === 'Mobile' && (genero === 'Homem Cis' || genero === 'Homem Trans') && idade > 40) totalMobileHomensMais40++
    if (tipoDev === 'FullStack' && genero === 'Não Binário' && idade < 30) totalFullStackNaoBinariosMenos30++

    // Total de pessoas e soma das idades
    totalPessoas++
    somaIdades += idade

    continuar = inputUser.question('Deseja continuar (S/N)? ').toUpperCase()
}


let mediaIdade = somaIdades / totalPessoas

// Relatório final
console.log('\n--- Relatório da Pesquisa ---\n')
console.log('Total de pessoas desenvolvedoras Backend:', totalBackend)
console.log('Total de Mulheres Cis e Trans desenvolvedoras Frontend:', totalFrontendMulheres)
console.log('Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos:', totalMobileHomensMais40)
console.log('Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos:', totalFullStackNaoBinariosMenos30)
console.log('Número total de pessoas que responderam à pesquisa:', totalPessoas)
console.log('Média de idade das pessoas que responderam à pesquisa:', mediaIdade.toFixed(2))
