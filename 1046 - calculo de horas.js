const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [horaInicio, horaTermino] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let valorA = lines.shift(); 
horaInicio = parseInt(horaInicio);
horaTermino = parseInt(horaTermino);

let hora = 24;

if(horaInicio > horaTermino){
    //Aqui eu subtrario as 24 horas do dia e somo com o horario do termino dessa forma tenho a hora decorrida. Usado quando o jogo começa em um dia e termina no outro
    hora = hora - horaInicio + horaTermino;
    console.log(`O JOGO DUROU ${hora} HORA(S)`);
}else if(horaInicio < horaTermino){
    //Aqui eu subtraio o horario de termino pelas 24 horas do dia para resultar no tempo restante até meia-noite, depois eu subtrario as 24hrs pela hora de inicio para representar o tempo que já passou desde o inicio do jogo. Depois somo os dois resultados eu tenho a duração do jogo
    hora = (horaTermino - hora) + (hora - horaInicio);
    console.log(`O JOGO DUROU ${hora} HORA(S)`);
}else{
    console.log(`O JOGO DUROU 24 HORA(S)`);
}