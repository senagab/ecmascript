
// map e set
let meuMap = new Map();
meuMap.set("nome", "gian");
meuMap.set("idade", "30");
meuMap.set("idioma", "portugues");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

// retorna resultados de propriedade especificada
const nome = meuMap.get("nome");

console.log(nome);

// retorna o numero de elementos no map
console.log(meuMap.size);


// booleano: confirma se propriedade existe
console.log(meuMap.has("sobrenome"));

// meuMap.clear();

console.log(meuMap.size)

// retorno de chave do map
for (let chave of meuMap.keys()) {
    console.log(chave);
}

// retorno de valor do map
for (let valor of meuMap.values()) {
    console.log(valor);
}

// retorno de entradas (chave + valor) do map
for (let entrada of meuMap.entries()) {
    console.log(entrada);
}

// retorno de entrada especificada do map
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

// deleção de chave do map
meuMap.delete("stack");

console.log(meuMap);

// set 
const cpfs = new Set();

cpfs.add('58497988035');
cpfs.add('20070738033');
cpfs.add('56281304004');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());