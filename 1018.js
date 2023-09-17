const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let valor = lines.shift();

valor = parseInt(valor);

let resto

let nota100 = parseInt(valor / 100);
resto = valor % 100;

let nota50 = parseInt(resto / 50);
resto = resto % 50;

let nota20 = parseInt(resto / 20);
resto = resto % 20;

let nota10 = parseInt(resto / 10);
resto = resto % 10;

let nota5 = parseInt(resto / 5);
resto = resto % 5;

let nota2 = parseInt(resto / 2);
resto = resto % 2;

let nota1 = parseInt(resto);

console.log(valor);

console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);
