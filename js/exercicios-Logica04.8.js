

function classificarHorarios() {
    // Contadores
    let madrugada = 0;
    let manha = 0;
    let tarde = 0;
    let noite = 0;
    let invalidos = 0;

    let i = 0;
    while (i < 6) {
        let horario = prompt("Digite um horário no formato hh:mm"); // lê do usuário

        if (horario && horario.length === 5 && horario.charAt(2) === ":") {
            let hh = parseInt(horario.substring(0, 2));
            let mm = parseInt(horario.substring(3, 5));

            if (hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59) {
                if (hh >= 0 && hh <= 4) {
                    madrugada++;
                } else if (hh >= 5 && hh <= 11) {
                    manha++;
                } else if (hh >= 12 && hh <= 17) {
                    tarde++;
                } else {
                    noite++;
                }
            } else {
                invalidos++;
            }
        } else {
            invalidos++;
        }

        i++;
    }

    // Mostra resumo com alert
    alert(
        "Resumo dos horários:\n" +
        "Madrugada: " + madrugada + "\n" +
        "Manhã: " + manha + "\n" +
        "Tarde: " + tarde + "\n" +
        "Noite: " + noite + "\n" +
        "Inválidos: " + invalidos
    );
}
