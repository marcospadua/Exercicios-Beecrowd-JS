const { createDiffieHellmanGroup } = require('crypto');
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
//let valorA = lines.shift();
let valores = 0;

do {

    valores = lines.shift().split(" ")
    if(valores[0] == 0 || valores[1] == 0){
        break;    
    }
    if (Number(valores[0]) >= 0 && Number(valores[1]) >= 0) {
        console.log(`primeiro`);
    } else if (Number(valores[0]) <= 0 && Number(valores[1]) >= 0) {
        console.log(`segundo`);
    } else if (Number(valores[0]) <= 0 && Number(valores[1]) <= 0) {
        console.log(`terceiro`);
    } else if (Number(valores[0]) >= 0 && Number(valores[1]) <= 0) {
        console.log(`quarto`);
    }

} while (Number(valores[0]) != 0 || Number(valores[1]) != 0)