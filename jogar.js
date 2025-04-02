function jogar() {
    let idade = prompt("Qual a sua idade?");
    if (idade < 18) {   
        alert("Você não pode jogar, pois é menor de idade.");
        return;
    }
    let nome = prompt("Qual o seu nome?");
    let escolha = prompt("Escolha sua arma: 1 - Pedra, 2 - Papel, 3 - Tesoura");
    let computador = Math.floor(Math.random() * 3) + 1;
    alert("Computador escolheu: " + computador);
    if (escolha == computador) {
        resultado = "Empate!";
        alert(resultado);
    } else if ((escolha == 1 && computador == 3) || (escolha == 2 && computador == 1) || (escolha == 3 && computador == 2)) {
        alert("Parabéns " + nome + ", você ganhou!");
    } else {
        alert("Que pena " + nome + ", você perdeu!");
    }
}