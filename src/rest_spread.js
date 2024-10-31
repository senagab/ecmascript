// arguments
function somar() {

    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;

    // console.log(arguments)
    // return a + b;
}

console.log(somar(10, 2, 3));

// rest
function somarComRest(...numeros) { // reticencias torna em operador rest
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 2, 3));

// spread
// numeros
const numeros = [1, 2, 3, 4];
console.log(...numeros);

// times
const timesDeFutebolSaoPaulo = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolRio = ['vasco', 'flamengo', 'botafogo', 'fluminense'];

// concatenação entre arrays
// const timesDeFutebol = timesDeFutebolSaoPaulo.concat(timesDeFutebolRio);
const timesDeFutebol = [...timesDeFutebolSaoPaulo, ...timesDeFutebolRio];

console.log(timesDeFutebol);

// operador spread em objetos
const carroDaJulia = {
    modelo: 'gol',
    marca: 'volkswagen',
    motor: 1.6
}

// puxa todas as propriedades do carroDaJulia alterando apenas a propriedade especificada
const carroDaCecilia = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaCecilia);

// desestruturação
// const motorDoCarroDaJulia = carroDaJulia.motor;
const { motor: motorDoCarroDaJulia } = carroDaJulia;
const { motor : motorDoCarroDaCecilia } = carroDaCecilia;

console.log(motorDoCarroDaCecilia, " - ", motorDoCarroDaJulia)


// desestruturação em array + variavel rest
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);