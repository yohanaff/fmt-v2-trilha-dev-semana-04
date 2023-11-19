# TrilhaDEV - Semana 4

Aqui você vai encontrar exercícios de reforço referente as aulas desta semana. 😃 💻
Não é necessário entregar estas questões, elas servem para você praticar o que aprendeu.

Chegou a hora de darmos vida à nossa calculadora!
Para isso, iremos utilizar JavaScript para capturar os valores e mostrar o resultado ao usuário. Você deverá criar um script para realização dos cálculos com base nas orientações abaixo.


**Importante**: Primeiro leia esta orientação até o final, e somente após a primeira leitura, retome o documento e comece o exercício.


Pensando no passo a passo para realização de uma operação matemática, temos o seguinte fluxo:

1. Usuário digita o primeiro número
2. Usuário digita o segundo número
3. Usuário escolhe qual operação deseja realizar
4. A calculadora exibe o resultado


Como já temos todos os elementos necessários no nosso documento HTML, precisamos organizar o nosso pensamento algorítmico. Sendo assim, o nosso script precisa executar os seguintes passos:
1. Capturar o valor do primeiro campo
2 Capturar o valor do segundo campo
3. Capturar o valor do campo de operação
4. Capturar o botão que confirma a realização do cálculo
5. Capturar o elemento onde o resultado será exibido no HTML
6. Garantir que o primeiro campo seja um número (parseInt)
7. Garantir que o segundo campo seja um número (parseInt)
8. Ao clicar no botão, com base no campo de operação, realizar a escolha da função matemática usando uma estrutura de escolha (switch)
9. No caso de uma operação de divisão, realizar a operação sempre considerando o maior número dividido pelo menor número (utilizar operação condicional “if” com os operadores de comparação) 
10. Capturar o elemento onde será impresso o resultado
Inserir o conteúdo do resultado no HTML


Algumas dicas para a realização desse script:
Cada cálculo matemático pode ser definido dentro de uma função: soma( ), subtracao( ), divisao( ), multiplicacao( ), etc
Cada função matemática pode retornar (return) o valor da operação, que deve ser atribuído a uma variável. Essa variável precisa ser inicializada no contexto global do JavaScript e ter o seu valor atribuído com base no resultado da operação
Todo o algoritmo que faz a execução da lógica de escolha pode ser definido dentro de uma função realizarCalculo( )
A função realizarCalculo( ) deve ser vinculada ao botão através da propriedade .onclick
O algoritmo para imprimir o resultado no HTML também pode ser inserido em uma função que recebe como argumento a variável que guarda o resultado da operação matemática e insere o conteúdo no elemento HTML correspondente. Exemplo: exibirResultado( resultado )
Não se esqueça de chamar a função exibirResultado no final do algoritmo realizarCalculo


Faça o script com calma, com pensamento sequencial, observando cada passo que a calculadora precisa realizar e implementando cada um dos algoritmos. No final deste exercício, você terá uma boa base de como escrever scripts para manipulação da DOM através da sequência algorítmica selecionar, modificar e exibir, que é a ideia fundamental da utilização de JavaScript com HTML.

**Bom trabalho!**