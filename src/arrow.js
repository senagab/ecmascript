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

const carro = {
    velocidadeAtual: 40,
    acelerar: function() { // método acelerar
        console.log(this);
        this.velocidadeAtual += 10;
        console.log("carro acelerando");
    },
    // frear retornará undefined
    frear: () => { // método frear
        console.log(this);
        this.velocidadeAtual -= 10;
        console.log("carro freando");
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);