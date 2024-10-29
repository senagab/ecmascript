const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// forEach
redesSociais.forEach(function (nomeDaRedeSocial, indice){
    console.log(`#${indice} Rede social: ${nomeDaRedeSocial}`);
})

const alunos = ['Gustavo', 'Júlia', 'Alice', 'Wagner'];

// map
const turma = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(turma);

// find
const alice = turma.find(function(item) {
    return item.nome == 'Alice'; // resultado booleano: se encontra retorna o item, se não, retorna nada (undefined)
})

console.log(alice);


// find index
const indiceDaJulia = turma.findIndex(function(item) {
    return item.nome == 'Júlio'; // resultado booleano: se encontra retorna a posição no array, se não, retorna -1
})

console.log(indiceDaJulia);

// push 
// adicionar novo aluno ao array
turma.push({
    nome: 'Lucio',
    curso: 'Backend'
})

// every
const todosAlunosSaoDeFront = turma.every(function(item) {
    return item.curso === 'Frontend'; // vai retornar caso o valor do curso seja correspondido 
})

console.log(todosAlunosSaoDeFront);