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

let valores = [valorA, valorB, valorC]
valores.sort((a,b) => a - b );

valorA = valores[2];
valorB = valores[1];
valorC = valores[0];

if(valorA >= valorB + valorC){
    console.log(`NAO FORMA TRIANGULO`);
}else if(valorA * valorA === valorB * valorB + valorC * valorC){
    console.log(`TRIANGULO RETANGULO`);
}else if(valorA * valorA > valorB * valorB + valorC * valorC){
    console.log(`TRIANGULO OBTUSANGULO`);
}else if(valorA * valorA < valorB * valorB + valorC * valorC){
    console.log(`TRIANGULO ACUTANGULO`);
}

if(valorA === valorB && valorA === valorC && valorB === valorC){
    console.log(`TRIANGULO EQUILATERO`);
}else if(valorA === valorB || valorA === valorC || valorB === valorC) {
    console.log(`TRIANGULO ISOSCELES`);
}