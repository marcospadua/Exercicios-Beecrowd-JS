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
    if ((valores[0] - valores[1]) > 0) {
        console.log(`Decrescente`);
    } else if ((valores[0] - valores[1]) < 0) {
        console.log(`Crescente`);
    } else {
        break;
    }
}while((valores[0] != valores[1]))