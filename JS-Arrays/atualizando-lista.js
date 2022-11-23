// Desafio 5: Atualizando elementos
// Temos que criar uma lista de chamada com os seguintes alunos:

// João
// Ana
// Caio
// Lara
// Marjorie
// Leo

//Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");

console.log(nomes);

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)