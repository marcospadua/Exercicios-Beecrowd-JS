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
let salario = lines.shift();

salario = parseFloat(salario)

if (salario >= 0 && salario <= 400.00) {
    let reajuste = salario * 0.15;
    salario += salario * 0.15;
    console.log(`Novo salario: ${salario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 15 %`);
}else if(salario >= 400.01 && salario <= 800.00){
    let reajuste = salario * 0.12;
    salario += salario * 0.12;
    console.log(`Novo salario: ${salario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 12 %`);
}else if(salario >= 800.01 && salario <= 1200.00){
    let reajuste = salario * 0.10;
    salario += salario * 0.10;
    console.log(`Novo salario: ${salario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 10 %`);
}else if(salario >= 1200.01 && salario <= 2000.00){
    let reajuste = salario * 0.07;
    salario += salario * 0.07;
    console.log(`Novo salario: ${salario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 7 %`);
}else{
    let reajuste = salario * 0.04;
    salario += salario * 0.04;
    console.log(`Novo salario: ${salario.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: 4 %`);
}