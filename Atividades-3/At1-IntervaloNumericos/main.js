const inputUser = require("readline-sync");

const intervalorInicial = inputUser.questionInt("Digite o primeiro número do intervalo: ");
const intervaloFinal = inputUser.questionInt("Digite o último número do intervalo: ");

if(intervalorInicial <= intervaloFinal){
  for (let i = intervalorInicial; i < intervaloFinal; i++){
    if (i % 3 === 0 && i % 5 === 0){
      console.log(i + " É divisivel por 3 e por 5")
    }
  }
}else{
  console.log('Intervalo invalido')
}
