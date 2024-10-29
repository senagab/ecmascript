"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// es6
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Júlia', 'Alice', 'Wagner'];
var turma = alunos.map(function (itemAtual) {
  // itemAtual = {
  //     nome: itemAtual,
  //     curso: 'Frontend'
  // }
  // return itemAtual;
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(turma);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  // numeroAtual = numeroAtual * 2;
  // return numeroAtual;
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);