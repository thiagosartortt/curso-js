function exemploLogin() {
    let usuario = "";
    let senha = "";
    let quantidadeTentativas = 0;

    while (usuario !== "admin" || senha !== "batatinha") {
        usuario = prompt("Digite o usuário");
        senha = prompt("Digite a senha");

        if (usuario === "admin" && senha === "batatinha") {
            alert("🎉 Finalmente acertou!");
            return;
        }

        // mensagens diferentes por tentativa (sem vetor)
        if (quantidadeTentativas === 0) {
            alert("🤨 Tá difícil? A senha não é essa, campeão...");
        } else if (quantidadeTentativas === 1) {
            alert("😒 Errou de novo! Tá gastando suas chances...");
        } else if (quantidadeTentativas === 2) {
            alert("🙄 Última tentativa, pensa direito antes de digitar!");
        }

        
        if (quantidadeTentativas === 3) {
            alert("❌ Qtd de tentativas máxima atingida. Melhor desistir 😂");
            return;
        }
        
        quantidadeTentativas = quantidadeTentativas + 1;
        console.log("Qtd de tentativas: " + quantidadeTentativas);
    }
}

exemploLogin();