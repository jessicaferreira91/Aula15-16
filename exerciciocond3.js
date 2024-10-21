const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
​
/* 1. A primeira linha está declarando uma variável e fazendo uma pergunta ao usuário.
2. Se o número fosse 10 a mensagem no terminal seria if (verdadeiro), pois 10 é maior que 0.
Se o número fosse -10 a mensagem no terminal seria else (falso), pois -10 é menor que 0.
3. Sim, pois não foi aberto e fechado {} antes do if. */