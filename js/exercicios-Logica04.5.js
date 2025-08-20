

function normalizarTelefones() {
    let i = 0;
    let resultados = [];
    let invalidos = 0;

    while (i < 4) {
        let telefone = prompt("Digite o telefone:");

        // remove espaços, parênteses e traços
        let limpo = telefone.replaceAll(" ", "")
                            .replaceAll("(", "")
                            .replaceAll(")", "")
                            .replaceAll("-", "");

        if (limpo.length === 10) {
            let ddd = limpo.substring(0, 2);
            let parte1 = limpo.substring(2, 6);
            let parte2 = limpo.substring(6);
            resultados.push(`(${ddd}) ${parte1}-${parte2}`);
        } 
        else if (limpo.length === 11) {
            let ddd = limpo.substring(0, 2);
            let parte1 = limpo.substring(2, 7);
            let parte2 = limpo.substring(7);
            resultados.push(`(${ddd}) ${parte1}-${parte2}`);
        } 
        else {
            resultados.push("Inválido");
            invalidos++;
        }

        i++;
    }

    console.log("📞 Telefones normalizados:");
    for (let tel of resultados) {
        console.log(tel);
    }
    console.log("Quantidade inválidos: " + invalidos);
}
