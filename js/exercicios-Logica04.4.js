

function processarDatas() {
    let i = 0;
    let maisAntiga = "";
    let chaveAntiga = "";
    let maisRecente = "";
    let chaveRecente = "";
    let contMar = 0;
    let contDez = 0;

    while (i < 5) {
        let data = prompt("Digite a data no formato dd/mm/aaaa:");

        let partes = data.split("/");
        let dia = partes[0].padStart(2, "0");
        let mes = partes[1].padStart(2, "0");
        let ano = partes[2];

        let chave = ano + mes + dia; // ex: "20250409"

        if (maisAntiga === "" || chave < chaveAntiga) {
            maisAntiga = data;
            chaveAntiga = chave;
        }

        if (maisRecente === "" || chave > chaveRecente) {
            maisRecente = data;
            chaveRecente = chave;
        }

        if (mes === "03") {
            contMar++;
        }
        if (mes === "12") {
            contDez++;
        }

        i++;
    }

    console.log("📊 RELATÓRIO FINAL");
    console.log("Mais antiga: " + maisAntiga);
    console.log("Mais recente: " + maisRecente);
    console.log("Datas em março: " + contMar);
    console.log("Datas em dezembro: " + contDez);
}
