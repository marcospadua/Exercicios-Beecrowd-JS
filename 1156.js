let s = 1
let j = 2
for(let i = 1; i <= 39; i){
  s += (i + 2) / j;
  i += 2
  j += j
}
console.log(s.toFixed(2));