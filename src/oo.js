// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon; // armazenando 
//     this.tipo = tipoDoPokemon; // este pokemon tem o tipo que é igual a esse attr aqui
// }

// // instancia de um pokemon
// const charmander = new Pokemon("Charmander", "Fogo") 

class Pokemon {
    #hp = 100; // campo privado

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) { // metodo
        console.log(`${this.nome} atacou com ${nomeDoAtaque}!`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHP(){
        console.log(this.#hp)
    }
}

// a classe pikachu herda de pokemon
class Squirtle extends Pokemon {
    constructor(){
        super('Squirtle', 'Água')
    }

    atacar() { // metodo
        console.log(`${this.nome} atacou com Aqua Tail!`)
    }
}

const squirtleDoAsh = new Squirtle()

squirtleDoAsh.recebeuAtaque()
squirtleDoAsh.hp = 9000;

console.log(squirtleDoAsh.hp)

squirtleDoAsh.atacar()
squirtleDoAsh.exibeHP()
const squirtle = new Pokemon('Squirtle', 'Água');
// squirtle.atacar('Aqua Tail')
// squirtle.nome = 'Squirtle';
// squirtle.tipo = 'Água';

console.log(squirtle)
console.log(squirtleDoAsh)

// variavel é instancia de classe
console.log(squirtleDoAsh instanceof Squirtle);
console.log(squirtleDoAsh instanceof Pokemon);