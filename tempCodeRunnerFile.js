let valor = Number(lines.shift());

for(let i = 0; i < 100; i++){
  console.log(`N[${i}] = ${valor.toFixed(4)}`);
  valor /= 2
}