// Desafio média - Calcular a média entre as seguintes notas: 10, 6.5, 8 e 7.5.

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(media)

// Array

// posições
//             0    1   2   3 
const notas = [10, 6.5, 8, 7.5];

// const media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

// substituir por length:

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)

// *Criando Arrays:
// *const notas = [10, 6.5, 7.5, 10];

// *Imprimindo o itém na posição 2:
// console.log(notas[2]); // imprime o número 8