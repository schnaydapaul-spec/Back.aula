const prompt = require("prompt-sync")();

function validarSenha(senha) {
    return senha.length >= 8;
}

let senha = prompt("Digite a senha: ");

if (validarSenha(senha)) {
    console.log("Senha valida");
} else {
    console.log("Senha fraca minimo 8 caracteres");
}