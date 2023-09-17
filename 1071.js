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
let valor1 = lines.shift();
let valor2 = lines.shift();

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

let i;
let contador = 0;

let valores = [valor1, valor2]
valores.sort((a, b) => a - b);

valor1 = valores[0]
valor2 = valores[1]

for (i = valor1 + 1; i < valor2; i++) {
    if (i % 2 !== 0) {
        contador += i
    }
}
console.log(contador);