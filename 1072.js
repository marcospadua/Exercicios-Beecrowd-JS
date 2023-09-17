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

let vetor = new Array(quantidade);

let dentro = 0;
let fora = 0;

for(let i = 0; i < vetor.length; i++){
    vetor[i] = parseInt(lines.shift())
    if(vetor[i] >= 10 && vetor[i] <= 20){
        dentro++
    } else{
        fora++
    }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);