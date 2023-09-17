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
//let valorA = lines.shift(); 

valorA = parseFloat(valorA);
valorB = parseFloat(valorB);
valorC = parseFloat(valorC);

if (valorA >= valorB + valorC || valorB >= valorA + valorC || valorC >= valorA + valorB) {
    let area = ((valorA + valorB) * valorC / 2);
    console.log(`Area = ${area.toFixed(1)}`);
} else {
    let perimetro = valorA + valorB + valorC;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}
