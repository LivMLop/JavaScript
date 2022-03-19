const alunos = [
    {
        nome: 'João',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Guilherme',
        nota: 7.5,
        turma: '7F',
    },
    {
        nome: 'Carlos',
        nota: 5,
        turma: '4A',
    },
    {
        nome: 'Pedro',
        nota: 3,
        turma: '3D',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    for(let i = 0; i < arr.length; i++) {

        const {nota,nome, turma} = arr[i];

        if(nota >= media) {
            aprovados.push(nome, turma);
        }
    }
    
    return aprovados;
}

console.log('Os alunos ', alunosAprovados(alunos, 6), ' estão acima da média.');