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
let var1 = parseFloat(lines.shift());
let var2 = parseFloat(lines.shift());
let var3 = parseFloat(lines.shift());
let var4 = parseFloat(lines.shift());
let var5 = parseFloat(lines.shift());


let arrayLines = [var1, var2, var3, var4, var5]
let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

arrayLines.forEach(number => {
    if (number % 2 === 0) {
        pares++;
    }else{
        impares++;
    }

    if(number > 0){
        positivos++
    }else if(number < 0){
        negativos++
    }
});

console.log(`${pares} valor(es) par(es)
${impares} valor(es) impar(es)
${positivos} valor(es) positivo(s)
${negativos} valor(es) negativo(s)`);