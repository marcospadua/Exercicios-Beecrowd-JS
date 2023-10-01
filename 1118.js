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

let valoresEntradas;
let opcao = 1;


do {
    let contadorNotaValida = 0;
    let media = 0;
    let notaValida = 0
    let repete = true
    do {

        valoresEntradas = parseFloat(lines.shift());

        if (valoresEntradas < 0.0 || valoresEntradas > 10.0) {
            console.log(`nota invalida`);
        }
        else if (valoresEntradas >= 0.0 || valoresEntradas <= 10.0) {
            contadorNotaValida++
            notaValida += valoresEntradas
           
        }
    } while (contadorNotaValida < 2)

    media = notaValida / 2
    console.log(`media = ${media.toFixed(2)}`);
    
    do{
        valoresEntradas = parseFloat(lines.shift());
        console.log(`novo calculo (1-sim 2-nao)`);
        if(valoresEntradas === 1 && valoresEntradas > 0 || valoresEntradas === 2 && valoresEntradas > 0){
            repete = false
        }

    }while(repete === true)

    opcao = valoresEntradas;
    
} while (opcao !== 2)

