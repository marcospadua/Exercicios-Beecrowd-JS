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
let ddd = lines.shift();

ddd = parseInt(ddd);

switch (ddd) {
    case 61:
        console.log(`Brasilia`);
        break;
    case 71:
        console.log(`Salvador`);
        break;
    case 11:
        console.log(`Sao Paulo`);
        break;
    case 21:
        console.log(`Rio de Janeiro`);
        break;
    case 32:
        console.log(`Juiz de Fora`);
        break;
    case 19:
        console.log(`Campinas`);
        break;
    case 27:
        console.log(`Vitoria`);
        break;
    case 31:
        console.log(`Belo Horizonte`);
        break;
    default:
        console.log(`DDD nao cadastrado`);
        break;
}