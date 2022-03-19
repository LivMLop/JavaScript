function calculaIdade(anos) {
    return `Hoje ${this.nome} tem ${this.idade}.
Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Carlos',
    idade: 20,
}

const pessoa2 = {
    nome: 'Ivone',
    idade: 25,
}

const pessoa3 = {
    nome: 'Andriana',
    idade: 36,
}

console.log(calculaIdade.call(pessoa1, 10));