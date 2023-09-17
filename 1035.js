const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [valorA, valorB, valorC, valorD] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let valorA = lines.shift();

//Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

valorA = parseInt(valorA);
valorB = parseInt(valorB);
valorC = parseInt(valorC);
valorD = parseInt(valorD);

let somaCd = parseInt(valorC + valorD);
let somaAb = parseInt(valorA + valorB);


if (valorB > valorC && valorD > valorA && somaCd > somaAb && valorC > 0 && valorD > 0 && (valorA % 2 === 0)) {
    console.log(`Valores aceitos`);
} else {
    console.log(`Valores nao aceitos`);
}