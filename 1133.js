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
let valor1 = parseInt(lines.shift());
let valor2 = parseInt(lines.shift());

let valores = [valor1, valor2]
valores.sort((a, b) => a - b);

valor1 = valores[0];
valor2 = valores[1];

let contador = 0;
for(valor1; valor1 < valor2; valor1++){
    if(valor1 % 5 === 2 ||valor1 % 5 === 3){
        contador += valor1
        console.log(contador);
        contador = 0;
    }
}




