let quantidade;
quantidade = parseInt(lines.shift());
let vetorLines = new Array(quantidade);

for (let i = 0; i < vetorLines.length; i++) {
    let valores = lines.shift().split(" ");
    
    if (valores[1] == 0) {
        console.log(`divisao impossivel`);
    }else if(valores[1] != 0){
        let divisao = (Number(valores[0]) / Number(valores[1]))
        console.log(divisao);
    }
}  