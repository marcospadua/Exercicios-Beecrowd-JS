const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [var1, var2] = lines.shift().split(" ");

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let valorA = lines.shift();

function imprimirComQuebraDeLinha(maximoNumerosPorLinha, maximoNumero) {
    let resultado = '';
  
    for (let i = 1; i <= maximoNumero; i++) {
      resultado += i;
  
     
      if (i % maximoNumerosPorLinha === 0 || i === maximoNumero) {
        console.log(resultado);
        resultado = ''; 
      } else {
        resultado += ' '; 
      }
    }
  }
  
  const maximoNumerosPorLinha = var1;
  const maximoNumero = var2;
  
  imprimirComQuebraDeLinha(maximoNumerosPorLinha, maximoNumero);
  