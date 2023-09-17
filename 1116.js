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
let quantidade;
quantidade = parseInt(lines.shift());
let vetorLines = new Array(quantidade);

for (let i = 0; i < vetorLines.length; i++) {
    let valores = lines.shift().split(" ");
    
    if (valores[1] == 0) {
        console.log(`divisao impossivel`);
    }else if(valores[1] != 0){
        let divisao = (Number(valores[0]) / Number(valores[1]))
        console.log(divisao.toFixed(1));
    }
}   