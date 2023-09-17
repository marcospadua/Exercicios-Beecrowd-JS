const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [valorX, valorY] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
// let notaExame = lines.shift(); 

valorX = parseFloat(valorX)
valorY = parseFloat(valorY)

if(valorX === 0.0 && valorY === 0.0){
    console.log(`Origem`)
}else if(valorX > 0 && valorY > 0){
    console.log(`Q1`);
}else if(valorX > 0 && valorY < 0){
    console.log(`Q4`);
}else if(valorX < 0 && valorY > 0){
    console.log(`Q2`);
}else if(valorX < 0 && valorY < 0){
    console.log(`Q3`);
}else if(valorX === 0.0){
    console.log(`Eixo X`);
}else {
    console.log(`Eixo Y`);
}