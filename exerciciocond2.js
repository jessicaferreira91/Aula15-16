let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/* 1. O código faz uma pergunta ao usuário e o usuário responde se é falso ou verdadeiro.
2. 'O preço da fruta maça é R$ 2.25.'
3. 'O preço da fruta pêra é R$ 5.*/