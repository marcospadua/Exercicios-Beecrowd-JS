const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [primeiraNota, segundaNota, terceiraNota, quartaNota, ] = lines.shift().split(" ");


//para ler linhas com um unico valor na mesma linha use o comando a seguir
let notaRecuperacao = lines.shift(); 



primeiraNota = parseFloat(primeiraNota);
segundaNota = parseFloat(segundaNota);
terceiraNota = parseFloat(terceiraNota);
quartaNota = parseFloat(quartaNota);
notaRecuperacao = parseFloat(notaRecuperacao);

let primeiroPeso = 2;
let segundoPeso = 3;
let terceiroPeso = 4;
let quartoPeso = 1;

let mediaPonderada = parseFloat(((primeiraNota * primeiroPeso) + (segundaNota * segundoPeso) + (terceiraNota * terceiroPeso) + (quartaNota * quartoPeso)) / 10)

console.log(`Media: ${mediaPonderada.toFixed(1)}`);

if(mediaPonderada < 5.0){
    console.log(`Aluno reprovado.`);
}else if(mediaPonderada >= 5.0 && mediaPonderada <= 6.9){
    console.log(`Aluno em exame.\nNota do exame: ${notaRecuperacao.toFixed(1)}`);
    mediaPonderada = (mediaPonderada + notaRecuperacao) / 2;
    if(mediaPonderada >= 5.0){
        console.log(`Aluno aprovado.\nMedia final: ${mediaPonderada.toFixed(1)}`);
    }else{
        console.log(`Aluno reprovado.\nMedia final: ${mediaPonderada.toFixed(1)}`);
    }
}else{
    console.log(`Aluno aprovado.`);
}