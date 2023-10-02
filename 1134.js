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

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let valoresEntradas;
let opcao = 0;

do{
    let repete = true
    do{
        valoresEntradas = Number(lines.shift());

        if(valoresEntradas === 1){
            alcool++
        }else if(valoresEntradas === 2){
            gasolina++
        }else if(valoresEntradas ===3){
            diesel++
        }else {
            repete = false
        }

    }while(repete === true)

    opcao = valoresEntradas;
    
}while(opcao !== 4)
console.log(`MUITO OBRIGADO
Alcool: ${alcool}
Gasolina: ${gasolina}
Diesel: ${diesel}`);