// array
const alunos = [
    { nome: 'Rafa', nota: 10 },
    { nome: 'Miguel', nota: 4.5 },
    { nome: 'Leozinho', nota: 2 },
    { nome: 'Donna', nota: 6 }
]

// filtra alunos de nota maior igual ou superior à 6
function filtraAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtraAprovados(alunos);

alunosAprovados.forEach(aluno => {
    console.log(`Aprovados | Nome: ${aluno.nome}, Nota: ${aluno.nota}.`)
})