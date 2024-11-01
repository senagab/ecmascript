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

// console.log(funcaoMuitoPesada())

async function execucaoPrincipal() {
    console.log("inicio")

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    const resultado = await funcaoMuitoPesadaPromise;

    console.log(resultado)
    console.log("fim")
}

execucaoPrincipal()