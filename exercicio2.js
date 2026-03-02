const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = leia.questionFloat("Digite o valor da nota 1: ")
nota2 = leia.questionFloat("Digite o valor da nota 2: ")
nota3 = leia.questionFloat("Digite o valor da nota 3: ")
nota4 = leia.questionFloat("Digite o valor da nota 4: ")

media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("A sua media foi: " + media.toFixed(1))