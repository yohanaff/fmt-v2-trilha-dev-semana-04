const form = document.querySelector("form");
form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    calcular()
})

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const opcoes = document.getElementById("operacao");

const resultadoCalculo = document.getElementById("resultado-calculo")

function calcular() {
    switch (opcoes.value) {
        case "soma":
            soma()
            break;
        case "subtracao":
            subtracao()
            break;
        case "divisao":
            divisao()
            break;
        case "multiplicacao":
            multiplicacao()
            break;
        default:
            resultadoCalculo.innerText = "Operação inválida"
    }
}

function soma() {
    let resultado = Number(numero1.value.replace(",", ".")) + Number(numero2.value.replace(",", "."));
    resultadoCalculo.innerText = `O resultado da soma é ${resultado}`
}

function subtracao() {
    let resultado = Number(numero1.value.replace(",", ".")) - Number(numero2.value);
    resultadoCalculo.innerText = `O resultado da subtração é ${resultado}`
}

function divisao() {
    let resultado = Number(numero1.value) / Number(numero2.value);
    resultadoCalculo.innerText = `O resultado da divisão é ${resultado}`
}

function multiplicacao() {
    let resultado = Number(numero1.value) * Number(numero2.value);
    resultadoCalculo.innerText = `O resultado da multiplicação é ${resultado}`
}