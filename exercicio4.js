const leia = require('readline-sync');

let numero1
let numero2
let numero3
let numero4
let calculo

numero1 = leia.questionInt("Digite o numero 1: ")
numero2 = leia.questionInt("Digite o numero 2: ")
numero3 = leia.questionInt("Digite o numero 3: ")
numero4 = leia.questionInt("Digite o numero 4: ")

calculo = (numero1 * numero2) - (numero3 * numero4)

console.log("O resultado do calculo foi: " + calculo)