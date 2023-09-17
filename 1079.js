const fileSystem = require('fs');
const { todo } = require('node:test');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let quantidade = parseInt(lines.shift());
let vetor = new Array(quantidade);

for (let i = 0; i < vetor.length; i++) {
    let notas = [lines.shift().split(" ")]
    notas = notas[0].slice(" ")
    mediaPonderada(notas[0], notas[1], notas[2])
}


function mediaPonderada(valor1, valor2, valor3) {
    let peso1 = 2;
    let peso2 = 3;
    let peso3 = 5;

    let mediaPonderada = parseFloat(((valor1 * peso1) + (valor2 * peso2) + (valor3 * peso3)) / (peso1 + peso2 + peso3));
    return console.log(mediaPonderada.toFixed(1));
}
