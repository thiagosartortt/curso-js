// 



function sistemaDeCompras() {
    let desejaCadastrar = "sim";
    let total = 0;
    let quantidade = 0;
    let maiorPreco = 0;
    let nomeMaisCaro = "";

    while (desejaCadastrar === "sim") {
        // lê nome do produto
        let nomeProduto = prompt("Digite o nome do produto:").trim();
        while (nomeProduto.length < 2) {
            nomeProduto = prompt("Nome inválido! Digite novamente:").trim();
        }

        // lê preço no formato BR e "limpa"
        let precoBr = prompt("Digite o preço do produto (ex: R$ 12,50):");
        let precoLimpo = precoBr.replace("R$", "").replaceAll(" ", "").replaceAll(".", "").replace(",", ".");
        let preco = parseFloat(precoLimpo);

        // atualiza cálculos
        total += preco;
        quantidade++;

        if (preco > maiorPreco) {
            maiorPreco = preco;
            nomeMaisCaro = nomeProduto;
        }

        // pergunta se continua
        desejaCadastrar = prompt("Deseja cadastrar outro produto? (sim/não)").toLowerCase().trim();
    }

    // relatório final
    console.log(" RELATÓRIO FINAL");
    console.log("Quantidade de produtos: " + quantidade);
    console.log("Total: R$ " + total.toFixed(2));
    console.log("Média: R$ " + (total / quantidade).toFixed(2));
    console.log("Mais caro: " + nomeMaisCaro + " (R$ " + maiorPreco.toFixed(2) + ")");
}
