const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [hora1, minuto1, hora2, minuto2] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let valorA = lines.shift(); 
hora1 = parseInt(hora1);
minuto1 = parseInt(minuto1);
hora2 = parseInt(hora2);
minuto2 = parseInt(minuto2);


function calcularDuracaoJogo(hora1, minuto1, hora2, minuto2) {
    if (hora2 > hora1 && minuto2 > minuto1) {
        let duracaoH = hora2 - hora1;
        let duracaoM = minuto2 - minuto1;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else if (hora2 > hora1 && minuto1 > minuto2) {
        let duracaoH = hora2 - hora1 - 1;
        let duracaoM = minuto2 - minuto1 + 60;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else if (hora2 === hora1 && minuto1 > minuto2) {
        let duracaoH = 23;
        let duracaoM = minuto2 - minuto1 + 60;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else if (hora2 === hora1 && minuto2 > minuto1) {
        let duracaoH = 0;
        let duracaoM = minuto2 - minuto1;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else if (hora2 > hora1 && minuto2 === minuto1) {
        let duracaoH = hora2 - hora1;
        let duracaoM = 0;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else if (hora2 < hora1 && minuto2 === minuto1) {
        let duracaoH = hora2 - hora1 + 24;
        let duracaoM = 0;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else if (hora2 < hora1 && minuto2 > minuto1) {
        let duracaoH = hora2 - hora1 + 24;
        let duracaoM = minuto2 - minuto1;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else if (hora2 < hora1 && minuto2 < minuto1) {
        let duracaoH = hora2 - hora1 + 23;
        let duracaoM = minuto2 - minuto1 + 60;
        console.log(`O JOGO DUROU ${duracaoH} HORA(S) E ${duracaoM} MINUTO(S)`);
    } else {
        console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
    }
}

calcularDuracaoJogo(hora1, minuto1, hora2, minuto2);
