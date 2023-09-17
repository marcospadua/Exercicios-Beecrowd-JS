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
let tipo1 = lines.shift();
let tipo2 = lines.shift();
let tipo3 = lines.shift();

if(tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "carnivoro"){
    console.log(`aguia`);
}else if(tipo1 == "vertebrado" && tipo2 == "ave" && tipo3 == "onivoro"){
    console.log(`pomba`);
}else if(tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "onivoro"){
    console.log(`homem`);
}else if(tipo1 == "vertebrado" && tipo2 == "mamifero" && tipo3 == "herbivoro"){
    console.log(`vaca`);
}else if(tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "hematofago"){
    console.log(`pulga`);
}else if(tipo1 == "invertebrado" && tipo2 == "inseto" && tipo3 == "herbivoro"){
    console.log(`largata`);
}else if(tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "hematofago"){
    console.log(`sanguessuga`);
}else if(tipo1 == "invertebrado" && tipo2 == "anelideo" && tipo3 == "onivoro"){
    console.log(`minhoca`);
}