// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon; // armazenando 
//     this.tipo = tipoDoPokemon; // este pokemon tem o tipo que é igual a esse attr aqui
// }

// // instancia de um pokemon
// const charmander = new Pokemon("Charmander", "Fogo") 

class Pokemon {

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) { // metodo
        console.log(`${this.nome} atacou com ${nomeDoAtaque}!`)
    }
}

const squirtle = new Pokemon('Squirtle', 'Água');
squirtle.atacar('Aqua Tail')
// squirtle.nome = 'Squirtle';
// squirtle.tipo = 'Água';

console.log(squirtle)