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
let quantidadeTeste = parseInt(lines.shift());
let total = 0, coelho = 0, rato = 0, sapo = 0


for(let i = 1; i <= quantidadeTeste; i++){
    let vetor = [lines.shift().split(" ")]
    vetor = vetor[0].slice(" ");
    vetor[0] = parseFloat(vetor[0])
    total += vetor[0];

    if(vetor[1] == "C"){
        coelho += vetor[0]
    }else if(vetor[1] == "R"){
        rato = rato + vetor[0]
    }else if(vetor[1] == "S"){
        sapo = sapo + vetor[0]
    }
}

let porcentagemCoelho = ((100 * coelho) / total);
let porcentagemRato = ((100 * rato) / total);
let porcentagemSapo = ((100 * sapo) / total);


console.log(`Total: ${total} cobaias
Total de coelhos: ${coelho}
Total de ratos: ${rato}
Total de sapos: ${sapo}
Percentual de coelhos: ${porcentagemCoelho.toFixed(2)} %
Percentual de ratos: ${porcentagemRato.toFixed(2)} %
Percentual de sapos: ${porcentagemSapo.toFixed(2)} %`);



