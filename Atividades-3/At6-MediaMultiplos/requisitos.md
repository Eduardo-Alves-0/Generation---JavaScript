Claro, Eduardo! Aqui estão os **requisitos do sistema** para esse algoritmo, organizados em **Markdown**:

---

## Requisitos do Sistema – Média de Números Múltiplos de 3

### 1. Entradas de Dados

O sistema deve permitir que o usuário digite números inteiros, um de cada vez.

* Cada número será solicitado via teclado.
* O processo continua até que o usuário digite **0**, que indica o fim da entrada de dados.

### 2. Condição de Parada

* O laço de entrada de dados deve parar quando o usuário digitar **0**.
* O número zero **não deve ser considerado** para os cálculos.

### 3. Processamento (Regras de Negócio)

Durante a coleta de números, o sistema deve:

* Verificar se cada número digitado é **múltiplo de 3**.
* Caso seja múltiplo de 3, **acumular o valor** para posterior cálculo da média.
* Contar quantos números múltiplos de 3 foram digitados.
* Calcular a **média** dos números múltiplos de 3 após a digitação do número zero.

### 4. Saída (Relatório Final)

Ao final da entrada de dados, o sistema deve exibir:

* A média de todos os números múltiplos de 3 digitados.
* Caso **nenhum número múltiplo de 3** tenha sido digitado, o sistema deve informar que não há números válidos para cálculo.

### 5. Conteúdos Utilizados

* Entrada e saída de dados via teclado.
* Operadores aritméticos (`%`, `+`, `/`).
* Estruturas condicionais (`if`).
* Laço de repetição **do…while**.
