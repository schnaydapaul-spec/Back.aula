const produtos = [
    { id: 1, nome: "Mouse", preco: 30 },
    { id: 2, nome: "Teclado", preco: 80 },
    { id: 3, nome: "Monitor", preco: 700 },
    { id: 4, nome: "Webcam", preco: 150 }
];

const produto = produtos.find(p => p.id === 3);

console.log(produto.nome);

const caros = produtos.filter(p => p.preco > 50);

console.log(caros);