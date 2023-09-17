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
let quantidade = parseInt(lines.shift());

let vetor = new Array(quantidade);

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = parseInt(lines.shift())
    if (vetor[i] % 2 === 0 && vetor[i] > 0) {
        console.log(`EVEN POSITIVE`);
    } else if (vetor[i] % 2 === 0 && vetor[i] < 0) {
        console.log(`EVEN NEGATIVE`);
    } else if (vetor[i] % 2 !== 0 && vetor[i] > 0) {
        console.log(`ODD POSITIVE`);
    } else if (vetor[i] % 2 !== 0 && vetor[i] < 0){
        console.log(`ODD NEGATIVE`);
    }else{
        console.log(`NULL`);
    }
}