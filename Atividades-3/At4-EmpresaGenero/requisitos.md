 Requisitos do Sistema – Pesquisa de Colaboradores

 1. Entradas de Dados

O sistema deve permitir que o usuário informe, para cada colaborador:

* **Idade** (número inteiro).
* **Identidade de Gênero** (escolhida por número inteiro):

  1. Mulher Cis
  2. Homem Cis
  3. Não Binário
  4. Mulher Trans
  5. Homem Trans
  6. Outros
* **Tipo de Pessoa Desenvolvedora** (escolhida por número inteiro):

  1. Backend
  2. Frontend
  3. Mobile
  4. FullStack

Após cada cadastro, o sistema deve perguntar:
 “Deseja continuar (S/N)?”

### 2. Condição de Parada

* O processo de entrada de dados continua até que o usuário digite **N** (não).

### 3. Processamento (Regras de Negócio)

Durante a coleta de dados, o sistema deve:

* Contabilizar o **total de desenvolvedores Backend**.
* Contabilizar o **total de Mulheres Cis e Trans desenvolvedoras Frontend**.
* Contabilizar o **total de Homens Cis e Trans desenvolvedores Mobile com mais de 40 anos**.
* Contabilizar o **total de Pessoas Não Binárias desenvolvedoras FullStack com menos de 30 anos**.
* Contabilizar o **número total de pessoas que responderam à pesquisa**.
* Calcular a **média de idade** dos colaboradores cadastrados.

### 4. Saída (Relatório Final)

Ao final da pesquisa (quando o usuário digitar "N"), o sistema deve exibir:

1. Total de pessoas desenvolvedoras Backend.
2. Total de Mulheres Cis e Trans desenvolvedoras Frontend.
3. Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos.
4. Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos.
5. O número total de pessoas que responderam à pesquisa.
6. A média de idade das pessoas que responderam à pesquisa.

---

Quer que eu organize isso também em **histórias de usuário** (como se fosse para backlog ágil), ou prefere só manter no formato de **requisitos funcionais** que escrevi?
