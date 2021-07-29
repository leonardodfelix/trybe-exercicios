// Array

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(menuServices);
console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);

// For

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index+= 1) {
  console.log(groceryList[index]);
}
