const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [valorA, valorB, valorC] = lines.shift().split(" ");

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let notaExame = lines.shift(); 

valorA = parseFloat(valorA)
valorB = parseFloat(valorB)
valorC = parseFloat(valorC)

let delta = parseFloat((Math.pow(valorB, 2)) - 4 * valorA * valorC);
let raizDelta = Math.sqrt(delta, 2);
let x = (((valorB * Math.sign(-1)) + raizDelta) / (valorA * 2));
let x1 = (((valorB * Math.sign(-1)) - raizDelta) / (valorA * 2))  

if(delta <= 0 || isNaN(raizDelta) || (valorA * 2) === 0 || isNaN(x) || isNaN(x1)){
    console.log(`Impossivel calcular`);
}else{
    console.log(`R1 = ${x.toFixed(5)}\nR2 = ${x1.toFixed(5)}`);
}



