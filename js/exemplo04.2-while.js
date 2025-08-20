// Copiar no caderno + PC
let quantidadeFogo = 0, quantidadeVento = 0, quantidadeRelampago = 0, quantidadeTerra = 0, quantidadeAgua = 0;
let somaMissoes = 0;
let menorQuantidadeMissoes = 999999999;
let quantidadeNinjas = 0;

function sistemaNinja() {
    let desejaCadastrar = true;
    while (desejaCadastrar === true) {
        let nome = solicitarNome();
        let nivel = solicitarNivel();
        let missoes = solicitarQuantidadeMissoes();
        let vila = solicitarVila();
        let elementos = solicitarElementos();

        let salario = obterSalario(nivel);

        calcularQuantidadePorElemento(elementos);
        calcularSomaMissoes(missoes);
        descobrirMenorMissao(missoes);
        apresentarDadosDoNinja(nome, nivel, missoes, vila, elementos, salario);

        // confirm retorna true ou false
        desejaCadastrar = confirm("Deseja cadastrar outro ninja?");
        // Necessário para a média
        quantidadeNinjas = quantidadeNinjas + 1;
    }

    apresentarRelatorio();
}

function apresentarDadosDoNinja(nome, nivel, missoes, vila, elementos, salario){
    alert(
        "Ninja: " + nome + 
        "\nNível: " + nivel + 
        "\nQuantidade de Missões: " + missoes + 
        "\nVila: " + vila + 
        "\nElementos: " + elementos + 
        "\nSalário: " + salario
    )
}

function apresentarRelatorio() {
    let mediaMissoes = somaMissoes / quantidadeNinjas;
    alert(
        "Quantidade de ninjas: " + quantidadeNinjas +
        "\nQuantidade de ninjas do fogo: " + quantidadeFogo +
        "\nQuantidade de ninjas do vento: " + quantidadeVento +
        "\nQuantidade de ninjas do relâmpago: " + quantidadeRelampago +
        "\nQuantidade de ninjas do terra: " + quantidadeTerra +
        "\nQuantidade de ninjas do água: " + quantidadeAgua +
        "\nMenor quantidade de missões: " + menorQuantidadeMissoes +
        "\nMédia das missões: " + mediaMissoes)
}

function calcularSomaMissoes(missoes) {
    somaMissoes = somaMissoes + missoes;
}

function descobrirMenorMissao(missoes) {
    if (missoes < menorQuantidadeMissoes) {
        menorQuantidadeMissoes = missoes;
    }
}

function obterSalario(nivel) {
    let salario = 0;
    // Genin, Chunin, Jonin I, Jonin II, ANBU, Kage
    if (nivel === "Genin") {
        salario = 1200;
    } else if (nivel === "Chunin") {
        salario = 2500;
    } else if (nivel === "Jonin I") {
        salario = 5000;
    } else if (nivel === "Jonin II") {
        salario = 7000;
    } else if (nivel === "ANBU") {
        salario = 9000;
    } else if (nivel === "Kage") {
        salario = 15000;
    }
    return salario;
}

function calcularQuantidadePorElemento(elementos) {

    if (elementos.includes("Fogo")) {
        quantidadeFogo = quantidadeFogo + 1;
    }
    if (elementos.includes("Vento")) {
        quantidadeVento = quantidadeVento + 1;
    }
    if (elementos.includes("Relâmpago")) {
        quantidadeRelampago = quantidadeRelampago + 1;
    }
    if (elementos.includes("Terra")) {
        quantidadeTerra = quantidadeTerra + 1;
    }
    if (elementos.includes("Água")) {
        quantidadeAgua = quantidadeAgua + 1;
    }
}

function solicitarNome() {
    // nome: min: 3, max: 40
    let nomeNinja = prompt("Digite o nome do ninja").trim();

    while (nomeNinja.length < 3 || nomeNinja.length > 40) {
        nomeNinja = prompt("Nome deve conter no mínimo 3 caracteres e no máximo 40.\nDigite o nome do ninja").trim();
    }

    return nomeNinja;
}


function solicitarNivel() {

    let nivelNinja = prompt("Níveis disponíveis: Genin, Chunin, Jonin I, Jonin II, ANBU, Kage.\nDigite o nível");
    while (
        nivelNinja !== "Genin" &&
        nivelNinja !== "Chunin" &&
        nivelNinja !== "Jonin I" &&
        nivelNinja !== "Jonin II" &&
        nivelNinja !== "ANBU" &&
        nivelNinja !== "Kage") {
        nivelNinja = prompt("Nível inválido.\nNíveis disponíveis: Genin, Chunin, Jonin I, Jonin II, ANBU, Kage.\nDigite o nível");
    }
    return nivelNinja;
}

function solicitarQuantidadeMissoes() {
    let missoesNinja = parseInt(prompt("Digite a quantidade de missões"));
    while (missoesNinja < 5 || missoesNinja > 200) {
        missoesNinja = parseInt(prompt("Quantidade inválida, min: 5 e max: 200.\nDigite a quantidade de missões"));
    }
    return missoesNinja;
}

function solicitarVila() {
    let numeroDaVila = parseInt(prompt(`Vilas disponíveis:
        1 - Vila da Folha
        2 - Vila da Areia
        3 - Vila da Névoa
        4 - Vila da Nuvem
        5 - Vila da Pedra
        6 - Vila da Chuva
        7 - Vila da Grama
        8 - Vila da Cachoeira
        9 - Vila do Som
    Digite o número da vila`));
    while (numeroDaVila < 1 || numeroDaVila > 9) {
        numeroDaVila = parseInt(prompt(`Vila inválida.\nVilas disponíveis:
        1 - Vila da Folha
        2 - Vila da Areia
        3 - Vila da Névoa
        4 - Vila da Nuvem
        5 - Vila da Pedra
        6 - Vila da Chuva
        7 - Vila da Grama
        8 - Vila da Cachoeira
        9 - Vila do Som
    Digite o número da vila`));
    }

    return numeroDaVila;
}

function solicitarElementos() {
    return prompt("Digite os elementos separados por ';'");

    // let elementos = "";
    // let adicionar = true;
    // while(adicionar === true){
    //     let elemento = prompt("Digite o elemento");
    //     if(elemento === `Fogo` || elemento === `Vento` || elemento === `Relâmpago` || elemento === `Terra` || elemento === `Água`){
    //         elementos = elementos + elemento + ";";
    //     }else{
    //         alert("Elemento inválido");
    //     }
    //     adicionar = confirm("Deseja cadastrar outro elemento?")
    // }
    // return elementos;
}