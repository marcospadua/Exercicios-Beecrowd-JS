const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
// let [quantidadeTeste] = lines.shift().split(" "); 


//para ler linhas com um unico valor na mesma linha use o comando a seguir
let quantidadeTeste = parseInt(lines.shift());
let vetorLines = new Array(quantidadeTeste)
let resto = 0;

for (let i = 0; i < vetorLines.length; i++) {
    let valores = lines.shift().split(" ");
    valores.sort((a, b) => a - b);
    let valor1 = parseInt(valores[0])
    let valor2 = parseInt(valores[1])
    resto = 0;
    for (let cont = valor1 + 1; cont < valor2; cont++) {
        if (cont % 2 !== 0) {
            resto += cont
        }
    }
    console.log(resto);
}