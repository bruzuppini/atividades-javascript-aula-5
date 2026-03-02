const leia = require('readline-sync');

let salario;
let abono;

salario = leia.questionInt("Digite o salario atual: ");

abono = leia.questionInt("Digite o valor de abono: ");

let novoSalario = salario + abono;

console.log("O valor do novo salario é: " + novoSalario);