const aluno = {
    nome: "maria",
    idade: 20,
    cidade: "São Paulo",
    curso: "Análise e Desenvolvimento de Sistemas"
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Cidade: ${aluno.cidade}`);
console.log(`Curso: ${aluno.curso}`);

aluno.cidade = "Campinas";

console.log(`Nova cidade: ${aluno.cidade}`);