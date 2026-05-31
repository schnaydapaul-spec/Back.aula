const prompt = require("prompt-sync")();

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b == 0) {
        return "Erro: divisao por zero";
    }
    return a / b;
}

let n1 = Number(prompt("Numero 1: "));
let n2 = Number(prompt("Numero 2: "));

console.log(somar(n1, n2));
console.log(subtrair(n1, n2));
console.log(multiplicar(n1, n2));
console.log(dividir(n1, n2));