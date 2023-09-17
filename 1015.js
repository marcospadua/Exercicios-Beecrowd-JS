const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [x1, y1] = lines.shift().split(" ");
let [x2, y2] = lines.shift().split(" ");

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift(); 

x1 = parseFloat(x1);
y1 = parseFloat(y1);
x2 = parseFloat(x2);
y2 = parseFloat(y2);


let parte1 = Math.pow((x2 - x1), 2);
let parte2 = Math.pow((y2 - y1), 2);

let distancia = Math.sqrt((parte1 + parte2),2)

console.log(distancia.toFixed(4));