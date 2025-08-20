

function cadastroEmails() {
    let gmail = 0;
    let outlook = 0;
    let yahoo = 0;
    let outros = 0;
    let invalidos = 0;

    while (true) {
        let email = prompt("Digite um e-mail (ou 'fim' para encerrar):")
                        .trim()
                        .toLowerCase();

        if (email === "fim") {
            break;
        }

        let partes = email.split("@");

        if (partes.length !== 2) {
            invalidos++;
            continue;
        }

        let dominio = partes[1];

        if (!dominio.includes(".")) {
            invalidos++;
            continue;
        }

        if (dominio === "gmail.com") {
            gmail++;
        } else if (dominio === "outlook.com") {
            outlook++;
        } else if (dominio === "yahoo.com") {
            yahoo++;
        } else {
            outros++;
        }
    }

    console.log("📧 Relatório de e-mails:");
    console.log("Gmail: " + gmail);
    console.log("Outlook: " + outlook);
    console.log("Yahoo: " + yahoo);
    console.log("Outros: " + outros);
    console.log("Inválidos: " + invalidos);
}
