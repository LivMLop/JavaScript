const lista = [
{
    nome: 'sabao em po',
    preco: 10,
},
{
    nome: 'cereal',
    preco: 6,
},
{
    nome: 'papel',
    preco: 3,
},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));