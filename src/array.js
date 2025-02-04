const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// forEach
redesSociais.forEach(function (nomeDaRedeSocial, indice){
    console.log(`#${indice} Rede social: ${nomeDaRedeSocial}`);
})

const alunos = ['Gustavo', 'Júlia', 'Alice', 'Wagner'];

// map: fazer uma manipulação e ter um array como retorno
const turma = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(turma);

// find: encontrar um item dentro de um array
const alice = turma.find(function(item) {
    return item.nome == 'Alice'; // resultado booleano: se encontra retorna o item, se não, retorna nada (undefined)
})

console.log(alice);


// find index: retorna a posição de um item dentro de um array
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

// every: retorna todos os itens dentro do array caso a condição seja satisfeita
const todosAlunosSaoDeFront = turma.every(function(item) {
    return item.curso === 'Frontend'; // booleano: vai retornar caso o valor do curso seja correspondido 
})

console.log(todosAlunosSaoDeFront);

// some: retorna se apenas um item satisfer condição
const existeAlgumAlunoDeBackend = turma.some(function(item) {
    return item.curso === 'Backend'; 
})

console.log(existeAlgumAlunoDeBackend);

// some com condição composta
const existeAlgumAlunoFullStack = turma.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'; 
})

console.log(existeAlgumAlunoFullStack);

// passar função direto como callback
function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

// filter + callback 
const alunosDeBackend = turma.filter(filtraAlunosDeBackend);

// filter
// const alunosDeBackend = turma.filter(function(item) {
//     return item.curso === 'Backend'; 
//     // filtra e retorna apenas entradas onde o valor é verdadeiro
// })

console.log(alunosDeBackend);


// reduce: agregação de valores
const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
}, 0) // acumulador vai ter o valor inicial de zero


console.log(soma);

// soma com for
let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

// reduce: reduz um objeto/array em uma unica variavel
const nomesDosAlunos = turma.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomesDosAlunos);