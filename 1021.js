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

valor = parseFloat(valor);


let nota100 = parseInt(valor / 100);
valor -= 100 * nota100;
let nota50 = parseInt(valor / 50);
valor -= 50 * nota50;
let nota20 = parseInt(valor / 20);
valor -= 20 * nota20;
let nota10 = parseInt(valor / 10);
valor -= 10 * nota10;
let nota5 = parseInt(valor / 5);
valor -= 5 * nota5;
let nota2 = parseInt(valor / 2);
valor -= 2 * nota2;

valor *= 100;
let moeda1 = parseInt(valor / 100);
valor -= 100 * moeda1
let moeda50 = parseInt(valor / 50);
valor -= 50 * moeda50;
let moeda25 = parseInt(valor / 25);
valor -= 25 * moeda25;
let moeda10 = parseInt(valor / 10);
valor -= 10 * moeda10;
let moeda5 = parseInt(valor / 5);
valor -= 5 * moeda5;


console.log(`NOTAS:
${nota100} nota(s) de R$ 100.00
${nota50} nota(s) de R$ 50.00
${nota20} nota(s) de R$ 20.00
${nota10} nota(s) de R$ 10.00
${nota5} nota(s) de R$ 5.00
${nota2} nota(s) de R$ 2.00
MOEDAS:
${moeda1} moeda(s) de R$ 1.00
${moeda50} moeda(s) de R$ 0.50
${moeda25} moeda(s) de R$ 0.25
${moeda10} moeda(s) de R$ 0.10
${moeda5} moeda(s) de R$ 0.05
${(valor).toFixed(0)} moeda(s) de R$ 0.01`);