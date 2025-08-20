function classificarFrases() {
    let i = 0;
    let perguntas = 0;
    let exclamacoes = 0;
    let neutras = 0;

    while (i < 6) {
        let frase = prompt("Digite uma frase:").trimEnd();
        let ultimo = frase.substring(frase.length - 1);

        if (ultimo === "?") {
            perguntas++;
        } else if (ultimo === "!") {
            exclamacoes++;
        } else {
            neutras++;
        }

        i++;
    }

    let total = perguntas + exclamacoes + neutras;

    console.log("📊 RELATÓRIO FINAL");
    console.log("Perguntas: " + perguntas + " (" + ((perguntas / total) * 100).toFixed(1) + "%)");
    console.log("Exclamações: " + exclamacoes + " (" + ((exclamacoes / total) * 100).toFixed(1) + "%)");
    console.log("Neutras: " + neutras + " (" + ((neutras / total) * 100).toFixed(1) + "%)");
}
