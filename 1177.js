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
let valor = Number(lines.shift());

function preencheValor(t){
  let n = []

  for(let i = 0; i < 1000; i++){
    n[i] = i % t
  }

  return n
}

vetorN = preencheValor(valor)

for(let i = 0; i < 1000; i++ ){
  console.log(`N[${i}] = ${vetorN[i]}`);
}
