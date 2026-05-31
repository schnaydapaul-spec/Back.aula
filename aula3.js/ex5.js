const readline = require("readline-sync");

let produtos = [];

for(let i = 0; i < 3; i++){

    let nome = readline.question("Nome: ");
    let preco = Number(readline.question("Preco: "));

    produtos.push({
        nome: nome,
        preco: preco
    });
}

const filtrados = produtos.filter(p => p.preco > 20);

console.log(filtrados);