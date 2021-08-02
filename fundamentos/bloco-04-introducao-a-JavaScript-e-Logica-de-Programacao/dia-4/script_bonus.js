// Bônus
// Ex. 1

function romanosParaIndoArabicos (numeroRomano) {
  let arrayRomano = numeroRomano.toUpperCase().split("");
  let sum = 0;
  for (let index = 0; index < arrayRomano.length; index += 1){
    switch (arrayRomano[index]) {
      case 'I':
        arrayRomano[index] = 1;
        break;
    
      case 'V':
        arrayRomano[index] = 5;
        break;
  
      case 'X':
        arrayRomano[index] = 10;
        break;

      case 'L':
        arrayRomano[index] = 50;
        break;
    
      case 'C':
        arrayRomano[index] = 100;
        break;
  
      case 'D':
        arrayRomano[index] = 500;
        break;
        
      case 'M':
        arrayRomano[index] = 1000;
        break;
      
      default:
        break;
    }
  }
  for (let index = 0; index < arrayRomano.length; index += 1){
    if (arrayRomano[index] < arrayRomano[index+1]) {
      arrayRomano[index] = -arrayRomano[index];
    }
    sum += arrayRomano[index];
  }
  return sum;
}

console.log(romanosParaIndoArabicos('MCDLII'));

// Ex.2

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];