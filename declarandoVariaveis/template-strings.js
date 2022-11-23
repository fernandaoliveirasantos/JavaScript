const nome = 'Fe';
const idade = 2021-1988;
const cidadeDeNascimento = 'São Paulo';
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

// const apresentacao = 'meu nome é ' + nome + ' , minha idade é ' + idade + ' e nasci na cidade de ' + cidadeDeNascimento;

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

console.log(pedido)



