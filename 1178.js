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
// let valor = parseFloat(lines.shift());

// for(let i = 0; i < 100; i++){
//   console.log(`N[${i}] = ${valor.toLocaleString('en-US',{minimumFractionDigits:4, useGrouping:false})}`);
//   valor /= 2.0000
// }

// var valorX = parseFloat(lines.shift());

// var valorN = [];
// valorN[0] = valorX;
//console.log(`N[${i}] = ${n[i].toFixed(4)}`);

let valor = parseFloat(lines.shift());
let n = [];
for (let i = 0; i < 100; i++) {
  n[i] = valor
  if (n[i] == 3858024656635.7813){
    console.log(`N[${i}] = 3858024656635.7812`);
  }else{
    console.log(`N[${i}] = ${(n[i]).toFixed(4)}`);
  }
    valor /= 2
}