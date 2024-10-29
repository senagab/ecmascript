// arrow function básica
const minhaFuncaoBasica = () => {
    console.log("diz ola");
}

minhaFuncaoBasica();

// arrow function
const minhaFuncao = () => {
    return "diz ola";
}

console.log(minhaFuncao());

// arrow function reduzida
const minhaFuncaoReduzida = () => "diz ola";

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
});

console.log(minhaFuncaoReduzida());
console.log(retornaUmCarro());