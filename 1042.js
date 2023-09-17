const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [var1, var2, var3] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift(); 

var1 = parseInt(var1);
var2 = parseInt(var2);
var3 = parseInt(var3);

var var4 = var1;
var var5 = var2;
var var6 = var3;

if (var4 > var5 && var4 > var6) {
  var temp = var4;
  var4 = var6;
  var6 = temp;
}

if (var5 > var4 && var5 > var6) {
  var temp = var5;
  var5 = var6;
  var6 = temp;
}

if (var4 > var5) {
  var temp = var4;
  var4 = var5;
  var5 = temp;
}

console.log(`${var4}\n${var5}\n${var6}\n\n${var1}\n${var2}\n${var3}`);
