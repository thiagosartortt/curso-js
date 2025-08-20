

function gerarUsuarios() {
    let usuarios = [];

    let i = 1;
    while (i <= 3) {
        let nomeCompleto = prompt("Digite o nome completo:").trim().toLowerCase();

        // separar em partes
        let partes = nomeCompleto.split(" ");
        let primeiroNome = partes[0];
        let ultimoSobrenome = partes[partes.length - 1];

        // montar username
        let username = primeiroNome.charAt(0) + ultimoSobrenome;

        // montar id sequencial (com 6 dígitos)
        let id = String(i).padStart(6, "0");

        // guardar em lista
        usuarios.push({ username: username, id: id });

        i++;
    }

    // Mostrar no console como tabela
    console.log("Username".padEnd(15, " ") + "ID");
    console.log("-------------------------");

    for (let user of usuarios) {
        console.log(user.username.padEnd(15, " ") + user.id);
    }
}
