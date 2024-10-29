const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// es6 forEach
redesSociais.forEach(function (nomeDaRedeSocial, indice){
    console.log(`#${indice} Rede social: ${nomeDaRedeSocial}`);
})

const alunos = ['Gustavo', 'Júlia', 'Alice', 'Wagner'];

// es6 map
const turma = alunos.map(function (itemAtual) {
    // itemAtual = {
    //     nome: itemAtual,
    //     curso: 'Frontend'
    // }
    // return itemAtual;
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(turma);

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    // numeroAtual = numeroAtual * 2;
    // return numeroAtual;
    return numeroAtual * 2;
})

console.log(dobroDosNumeros);