let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número:"))

console.log(`Soma: ${n1 + n2}`)
console.log(`Subtração: ${n1 - n2}`)
console.log(`Multiplicação: ${n1 * n2}`)

if(n2 == 0){
    console.log("Não é possível dividir por zero")
}else{
    console.log(`Divisão: ${n1 / n2}`)
}