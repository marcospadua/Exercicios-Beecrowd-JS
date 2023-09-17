const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '\\dev\\stdin', 'utf8');

var lines = input.split('\n');

//quebrando a entrada
lines = lines[0].split(" ");


if (lines[0] === "1") {
    
    let valorTotal = 4.00 * lines[1];
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`);

} else if (lines[0] === "2") {

    let valorTotal = 4.50 * lines[1];
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`);

} else if (lines[0] === "3") {

    let valorTotal = 5.00 * lines[1];
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`);

} else if (lines[0] === "4") {

    let valorTotal = 2.00 * lines[1];
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`);

} else if (lines[0] === "5") {

    let valorTotal = 1.50 * lines[1];
    console.log(`Total: R$ ${valorTotal.toFixed(2)}`);
}
