const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [var1, var2] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let valorA = lines.shift(); 

var1 = parseInt(var1);
var2 = parseInt(var2);
let aux;
if(var1 < var2){
    aux = var2
    var2 = var1
    var1 = aux
}

if(var1 % var2 === 0){
    console.log(`Sao Multiplos`);
}else{
    console.log(`Nao sao Multiplos`);
}