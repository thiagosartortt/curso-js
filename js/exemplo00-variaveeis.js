function apresentarMensagemConsole() {
    console.log("Hello World");
}
function apresentarMensagemConsole() {
    alert("Minha primeira mensagem em JS para o usuário");
}

// <button onclick=*exemploVariaveisInteiras()">Somar inteiro fixos</button>"
// padrão de nomenclatura de funções em JS camelCase
function exemploVariaveisInteiras() {
    // padrão de nomenclatura de variáveis em JS é camelCase
    let numero1 = 7; //tipo inteiro
    let numero2 = 24;  // tipo inteiro
    let soma = numero1 = numero2;
    alert("Soma: " + soma);
}

function exempoloVariaveisString() {
    let nome = "John";
    let nomeComposto = "Thiago"
    let sobrenome = "Doe";
    //O "+" tem função de soma e concatenação
    // Concatenação juntar duas coisas "Ana" "Maria" "AnaMaria"
    // John Thiago Doe
    let nomeCompleto = nome + " " + nomeComposto + " " + sobrenome;
    alert("Nome  Completo: " + nomeCompleto);
}

function exemploVariaveisFloat() {
    let precoAbacaxi = 12.39;
    let precoSwitch2 = 4500.00;

    let total = precoAbacaxi + precoSwitch2;
    alert("Total: " + total);
}

function exemploMercado() {
    let produto1Nome = "Cerveja";
    let produto1Quantidade = 12;
    let produto1Preco = 5.30;
    let produto1Total = produto1Quantidade * produto1Preco

    let produto2Nome = "Amendoin"
    let produto2Quantidade = 2;
    let produto2Preco = 8.00;
    let produto2Total = produto2Quantidade * produto2Preco

    let totalCompra = produto1Total + produto2Total;

    alert(
        "Produto 1: " + produto1Nome +
        "\nQuantidade: " + produto1Quantidade +
        "\nPreço Unitário: " + produto1Preco +
        "\nValor: " + produto1Total +
        "\n\nProduto 2: " + produto2Nome +
        "\nQuantidade: " + produto2Quantidade +
        "\nPreço Unitário: " + produto2Preco +
        "\nValor: " + produto2Total +
        "\n\nTotal: " + totalCompra
    )
}
