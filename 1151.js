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
let n = Number(lines.shift());


let fib1 = 0,
  fib2 = 1;

for (let i = 0; i < n; i++) {
  if (i === n - 1) {
    process.stdout.write(`${fib1}\n`);
  } else {
    process.stdout.write(`${fib1} `);
  }

  const fib3 = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib3;
}