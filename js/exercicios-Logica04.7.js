function maiorMenorFrases() {
    let menorLen = 999999999;
    let menorFrase = "";

    let maiorLen = 0;
    let maiorFrase = "";

    let contador = 0;

    while (contador < 5) {
        let frase = prompt("Digite a frase " + (contador+1) + ":").trim();
        let tamanho = frase.length;

        if (tamanho < menorLen) {
            menorLen = tamanho;
            menorFrase = frase;
        }

        if (tamanho > maiorLen) {
            maiorLen = tamanho;
            maiorFrase = frase;
        }

        contador++;
    }

    console.log(`Menor (len ${menorLen}): "${menorFrase}"`);
    console.log(`Maior (len ${maiorLen}): "${maiorFrase}"`);
}
