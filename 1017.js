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
let tempoViagem = lines.shift(); 
let velocidadeMedia = lines.shift(); 

tempoViagem = parseInt(tempoViagem);
velocidadeMedia = parseFloat(velocidadeMedia);
let kmPorLitro = 12

let litrosGasto = (velocidadeMedia / kmPorLitro);

console.log((litrosGasto * tempoViagem).toFixed(3));