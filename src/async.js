function funcaoMuitoPesada() {

}

// thread pricipal a b
// promise c ------>

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++){
            // console.log(i);
            execucoess++;
        }
        resolve(execucoes);
    }
    catch(e) {
        reject("deu erro aqui chupeta")
    }
});

console.log("inicio")
// console.log(funcaoMuitoPesada())
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
console.log("fim")
