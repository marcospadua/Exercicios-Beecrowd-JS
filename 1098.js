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
function main() {
  let i = 0;
  let j = 1;

  while (i <= 2) {
      for (let count = 0; count < 3; count++) {
          console.log(`I=${i.toFixed(1)} J=${j.toFixed(1)}`);
          j++;
      }
      i += 0.2;
      j -= 2.8;
  }
}

main();

