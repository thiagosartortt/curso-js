

function validarCodigos() {
    let validos = 0;
    let invalidos = 0;
    let listaValidos = [];

    let i = 0;
    while (i < 5) {
        let codigo = prompt("Digite um código no formato BLU-AAAA-NNNN");

        // Quebra em partes
        let partes = codigo.split("-");

        if (partes.length === 3) {
            let prefixo = partes[0];
            let ano = partes[1];
            let numero = partes[2];

            // Validar prefixo
            if (prefixo === "BLU") {
                // Validar ano
                let anoNum = parseInt(ano);
                if (ano.length === 4 && anoNum >= 2000) {
                    // Validar número
                    let numInt = parseInt(numero);
                    if (!isNaN(numInt) && numero.length <= 4) {
                        // Normalizar número (padStart completa até 4 dígitos)
                        let numeroNormalizado = String(numInt).padStart(4, "0");

                        // Monta código final padronizado
                        let codigoNormalizado = prefixo + "-" + ano + "-" + numeroNormalizado;

                        listaValidos.push(codigoNormalizado);
                        validos++;
                    } else {
                        invalidos++;
                    }
                } else {
                    invalidos++;
                }
            } else {
                invalidos++;
            }
        } else {
            invalidos++;
        }

        i++;
    }

    // Mostrar resultado no console
    console.log("Total válidos:", validos);
    console.log("Total inválidos:", invalidos);
    console.log("Lista de válidos normalizados:");
    console.log(listaValidos);
}
