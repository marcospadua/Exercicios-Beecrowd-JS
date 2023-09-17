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

salario = parseFloat(salario);

function calcularImposto(salario) {
    if (salario <= 2000) {
        return 0;
    } else if (salario <= 3000) {
        return (salario - 2000) * 0.08; //Aqui eu pego o salario menos 2000 que (faixa isenta) somento o restante dessa subtração tera imposto
    } else if (salario <= 4500) {
        return (1000 * 0.08) + (salario - 3000) * 0.18; //Aqui eu calculo 8% de 1000 que é a diferença entre as duas faixas (3000 - 2000), depois subtraio o salário menos 3000 e acho quanto vale 18% desse valor (que é a parte que entra em 18% de imposto)
    } else {
        return (1000 * 0.08) + (1500 * 0.18) + (salario - 4500) * 0.28; //Aqui eu refaço adicionando a nova parte do código
    }
}

let imposto = calcularImposto(salario);

if (imposto === 0) {
    console.log("Isento");
} else {
    console.log(`R$ ${imposto.toFixed(2)}`);
}