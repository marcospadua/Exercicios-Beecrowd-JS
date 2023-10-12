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
let quantidade = Number(lines.shift());
let numero;
let numPrimo = 0;
let repeticao = 0;

do{
  numero = Number(lines.shift());
  numPrimo = 0;
  for(let i = 0; i <= numero; i++){
    if(numero % i === 0){
      numPrimo++
    }
  }
  if(numPrimo !== 2){
    console.log(`${numero} nao eh primo`);
  }else{
    console.log(`${numero} eh primo`);
  }
  repeticao++
}while(repeticao < quantidade)

