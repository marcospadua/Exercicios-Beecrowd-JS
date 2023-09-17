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

let notas = 0;

let notaValida = 0;
let media = 0;
let i = 0;
do {

    notas = lines.shift();
    notas = parseFloat(notas)

    if (notas < 0 || notas > 10) {
        console.log(`nota invalida`);
    }

    if (notas >= 0 && notas <= 10) {
        i++
        notaValida += notas
        media = notaValida / 2.0;
    }

} while (i < 2)
console.log(`media = ${media.toFixed(2)}`);