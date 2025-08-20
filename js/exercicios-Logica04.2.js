

function processarCSV() {
    let i = 0;
    let validas = 0;
    let invalidas = 0;
    let indicesInvalidos = "";

    while (i < 5) {
        let linha = prompt("Digite a linha no formato id;nome;cpf;aaaa-mm-dd:");
        
        let partes = linha.split(";");

        if (partes.length !== 4) {
            console.log("❌ Linha " + i + " inválida: formato errado.");
            invalidas++;
            indicesInvalidos += i + " ";
        } else {
            let id = partes[0];
            let nome = partes[1].trim();
            let cpf = partes[2];
            let data = partes[3];

            let ok = true;

            // valida id
            if (id.replace(/\d/g, "") !== "" || Number(id) <= 0) {
                ok = false;
            }

            // valida nome
            if (nome.length < 7) {
                ok = false;
            }

            // valida cpf
            if (cpf.length !== 14 || cpf.charAt(3) !== "." || cpf.charAt(7) !== "." || cpf.charAt(11) !== "-") {
                ok = false;
            }

            // valida data
            if (data.length !== 10 || data.charAt(4) !== "-" || data.charAt(7) !== "-") {
                ok = false;
            }

            if (ok) {
                console.log("✅ Linha " + i + " válida!");
                validas++;
            } else {
                console.log("❌ Linha " + i + " inválida!");
                invalidas++;
                indicesInvalidos += i + " ";
            }
        }

        i++;
    }

    console.log("RELATÓRIO FINAL");
    console.log("Linhas válidas: " + validas);
    console.log("Linhas inválidas: " + invalidas);
    console.log("Índices inválidos: " + indicesInvalidos);
}
