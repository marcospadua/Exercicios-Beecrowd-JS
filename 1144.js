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
let valores = parseInt(lines.shift());

for(let i = 1; i <= valores; i++){
    let a = parseInt(Math.pow(i, 2));
    let a1 = parseInt(Math.pow(i, 2) + 1);
    let b = parseInt(Math.pow(i, 3));
    let b1 = parseInt(Math.pow(i, 3) + 1);

    console.log(`${i} ${a} ${b}`);
    console.log(`${i} ${a1} ${b1}`);
}
