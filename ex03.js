const prompt = require("prompt-sync")();

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if (b == 0) {
        return "Erro: divisao por zero";
    }
    return a / b;
};

let n1 = Number(prompt("Numero 1: "));
let n2 = Number(prompt("Numero 2: "));

console.log(somar(n1, n2));
console.log(subtrair(n1, n2));
console.log(multiplicar(n1, n2));
console.log(dividir(n1, n2));