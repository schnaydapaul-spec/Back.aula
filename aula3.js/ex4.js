const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Pedro", nota: 5 },
    { nome: "Maria", nota: 9 },
    { nome: "Lucas", nota: 6 },
    { nome: "Julia", nota: 7 }
];

const resultado = alunos.map(aluno => ({
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
}));

console.log(resultado);