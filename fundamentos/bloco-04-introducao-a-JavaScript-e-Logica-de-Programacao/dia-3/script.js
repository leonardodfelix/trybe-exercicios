let n = 11;
let spaces = 0;

// Ex.1

for (let index = 0; index < n; index += 1) {
  spaces = n;
  console.log('*'.repeat(spaces));
}

// Ex.2

for (let index = 0; index < n; index += 1) {
  console.log('*'.repeat(index));
}

// Ex.3

for (let index = 0; index < n; index += 1) {
  spaces = n - index;
  console.log(' '.repeat(spaces) + '*'.repeat(index));
}

// Ex.4

for (let index = 0; index < n; index += 2) {
  spaces = Math.floor((n - index)/2);
  console.log(' '.repeat(spaces)+
              '*'.repeat(n - (2*spaces))+
              ' '.repeat(spaces));
}

// Ex.5
let center = 1;

for (let index = 0; index < n; index += 2) {
  spaces = Math.floor((n - index)/2);
  if (index === 0) {
    console.log(' '.repeat(spaces)+'*');
  } else if (index === (n-1)){
    console.log('*'.repeat(n));
  } else {
    console.log(' '.repeat(spaces)+'*'+' '.repeat(center)+'*'+' '.repeat(spaces));
  }
  if (index) {
    center += 2;
  }
}