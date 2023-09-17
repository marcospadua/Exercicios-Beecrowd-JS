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
//let valorA = lines.shift();
// Função para calcular a diferença entre dois horários

var linha1 = lines.shift().split(" ");
var linha2 = lines.shift().split(` : `);
var linha3 = lines.shift().split(" ");
var linha4 = lines.shift().split(` : `);

var dia1, hora1, minuto1, segundo1, dia2, hora2, minuto2, segundo2;
var dia;

dia = linha1.shift();
dia1 = parseInt(linha1.shift());

hora1 = parseInt(linha2.shift());
minuto1 = parseInt(linha2.shift());
segundo1 = parseInt(linha2.shift());

dia = linha3.shift();
dia2 = parseInt(linha3.shift());

hora2 = parseInt(linha4.shift());
minuto2 = parseInt(linha4.shift());
segundo2 = parseInt(linha4.shift());

segundo1 = segundo2 - segundo1;
minuto1 = minuto2 - minuto1;
hora1 = hora2 - hora1;
dia1 = dia2 - dia1;

if (segundo1 < 0) {
    segundo1 += 60;
    minuto1--;
}

if (minuto1 < 0) {
    minuto1 += 60;
    hora1--;
}

if (hora1 < 0) {
    hora1 += 24;
    dia1--;
}

console.log(`${dia1} dia(s)`);
console.log(`${hora1} hora(s)`);
console.log(`${minuto1} minuto(s)`);
console.log(`${segundo1} segundo(s)`);