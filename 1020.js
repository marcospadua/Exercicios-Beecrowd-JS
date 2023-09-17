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
let idade = lines.shift(); 

idade = parseInt(idade);

let anos = parseInt(idade / 365);
let resto = parseInt(idade % 365);

let meses = parseInt(resto / 30);
resto = parseInt(resto % 30);

let dias = resto;

console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`);