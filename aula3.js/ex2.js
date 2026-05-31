const produtos = [
    { id: 1, nome: "Mouse", preco: 30 },
    { id: 2, nome: "Teclado", preco: 80 },
    { id: 3, nome: "Monitor", preco: 700 },
    { id: 4, nome: "Webcam", preco: 150 }
];

for(let i = 0; i < produtos.length; i++){
    console.log(produtos[i]);
}

produtos.push({
    id: 5,
    nome: "Headset",
    preco: 120
});

console.log("Tamanho:", produtos.length);