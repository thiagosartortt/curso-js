// string
function converterStringParaInt(){
    const anoFabricacaoEntradaUsuario = "2024"; // string
    const anoFabricacao = parseInt(anoFabricacaoEntradaUsuario);
    alert("Ano Fabricação: " + anoFabricacao);
}

function exemploConverterStringParaFloat(){
    const precoDoCarro = "299800.10";
    const preco = parseFloat(precoDoCarro);
    alert("Preco: " + preco);
}

exemploConverterStringParaFloat();
