const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [valor1, valor2] = lines.shift().split(" ");

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let continuar = true
do {
  let aux = 0;
  let soma = 0;
  let impressao = "";

  let valores = lines.shift().split(" ");
  if (Number(valores[0]) <= 0 || Number(valores[1]) <= 0) {
    break;
  }

  if (Number(valores[0]) > Number(valores[1])) {
    for (let i = Number(valores[1]); i <= Number(valores[0]); i++) {
      soma += i;
      impressao += `${i} `;
    }
  } else if (Number(valores[0]) < Number(valores[1])) {
    for (let i = Number(valores[0]); i <= Number(valores[1]); i++) {
      soma += i;
      impressao += `${i} `;
    }
  }
  console.log(`${impressao}Sum=${soma}`);
} while (continuar)


