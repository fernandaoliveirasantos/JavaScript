function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 20))

// parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Fe", 33))

// ordem dos parâmetros

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function mutiplica(numero1, numero2) {
    return numero1 * numero2;
}

function mutiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(mutiplica(soma(4, 5)))

