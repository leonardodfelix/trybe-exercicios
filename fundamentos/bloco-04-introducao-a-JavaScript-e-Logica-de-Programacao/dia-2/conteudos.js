// Array
console.log("\n Array \n")

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(menuServices);
console.log(indexOfPortfolio);

menu.push('Contato');
console.log(menu);

// For
console.log("\n For \n")

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index+= 1) {
  console.log(groceryList[index]);
}

// For/of
console.log("\n For/of \n")

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name);  
}