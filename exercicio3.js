const leia = require('readline-sync');

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = leia.questionInt("Digite o valor do salario bruto: ");
adicionalNoturno = leia.questionInt("Digite o valor do adicional noturno: ");
horasExtras = leia.questionInt("Digite o valor das horas extras: ");
descontos = leia.questionInt("Digite o valor dos descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
console.log("O valor do salario liquido é: " + salarioLiquido)