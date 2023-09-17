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
let valor0 = parseFloat(lines.shift());
let valor1 = parseFloat(lines.shift());
let valor2 = parseFloat(lines.shift());
let valor3 = parseFloat(lines.shift());
let valor4 = parseFloat(lines.shift());
let valor5 = parseFloat(lines.shift());

let arrayLines = [valor0, valor1, valor2, valor3, valor4, valor5]
let i = 0

arrayLines.forEach(number => {
    if(number > 0){
        i++
    }    
});

console.log(`${i} valores positivos`);