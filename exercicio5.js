let perguntaConcluiuOensinoMedio
let perguntaidade
let perguntaFazFaculdade 

perguntaConcluiuOensinoMedio = prompt ('Concluiu o ensino médio? Digite "S" para sim e "N" para não.')
perguntaidade = prompt ('Quantos anos você tem?')
perguntaFazFaculdade = prompt ('Você faz faculdade? "S" para sim e "N" para não.')

function podeMatricular(concluiuOensinoMedio, idade, fazFaculdade) {
    if (concluiuOensinoMedio === 'S' && idade >= 18 && fazFaculdade === 'N') {
        return 'pode se matricular'
    } else {
        return 'não pode se matricular'
    }
}

const pode = podeMatricular(perguntaConcluiuOensinoMedio, perguntaidade, perguntaFazFaculdade)

console.log(pode)