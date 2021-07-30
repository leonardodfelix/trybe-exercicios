// Ex.1

let n = 5;

for (let index1 = 0; index1 < n; index1 += 1){
  console.log('*'.repeat(n));
}
 
// Ex.2

for (let index2 = 0; index2 < n; index2 += 1) {
  console.log('*'.repeat(index2));
}

// Ex.3

for (let index2 = 0; index2 < n; index2 += 1) {
  console.log(' '.repeat(n-index2)+'*'.repeat(index2));
}

