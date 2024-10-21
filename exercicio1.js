function comparaNumeros(num1, num2) {
if (num1 === num2) {
return 'São iguais.'
}
}
const numero1 = prompt('digite um numero?')
const numero2 = prompt('digite outro numero?')
const compara = comparaNumeros(Number(numero1), (numero2))
console.log(compara)