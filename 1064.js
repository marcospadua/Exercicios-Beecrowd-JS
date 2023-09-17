const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4, var5, var6] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let var1 = parseFloat(lines.shift());
let var2 = parseFloat(lines.shift());
let var3 = parseFloat(lines.shift());
let var4 = parseFloat(lines.shift());
let var5 = parseFloat(lines.shift());
let var6 = parseFloat(lines.shift());

let arrayLines = [var1, var2, var3, var4, var5, var6];
let i = 0;
let contador;
let teste = 0;


arrayLines.forEach(number => {
    if (number > 0) {
        i++;
    }
    if (number > 0) {
        for (let x = 0; x < arrayLines.length; x++) {
            contador = number;
        }
        teste = contador + teste;
    }
});

console.log(`${i} valores positivos`);
console.log((teste / i).toFixed(1));