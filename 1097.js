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
  const vetor1 = [7, 6, 5, 9, 8, 7, 11, 10, 9, 13, 12, 11, 15, 14, 13];
  const vetor2 = new Array(15);
  let j = 0;

  for (let i = 1; i < 10; i += 2) {
      vetor2[i] = i;

      console.log(`I=${vetor2[i]} J=${vetor1[j]}`);
      j++;
      console.log(`I=${vetor2[i]} J=${vetor1[j]}`);
      j++;
      console.log(`I=${vetor2[i]} J=${vetor1[j]}`);
      j++;
  }
}

main();
