const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
 */
const liList = document.getElementsByTagName('li');
for (let li of liList) {
  li.addEventListener('click', addClassTech);
}
function addClassTech(event) {
  resetClassTech();
  event.target.className = 'tech';
}
function resetClassTech() {
  for(let li of liList) {
    li.className = '';
  }
}
 /*
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/
input.addEventListener('input', changeSelectedToInput);
function changeSelectedToInput() {
  let techElement = document.getElementsByClassName('tech')[0];
  techElement.innerText = input.value;
}
/*
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
*/
myWebpage.addEventListener('dblclick',goToWebsite);
function goToWebsite(event) {
  // console.log(event.target);
  // console.log(event.type);
  window.open('https://leonardodfelix.github.io/', '_blank');
}
/*
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;*/
myWebpage.addEventListener('mouseover',changeColor);
function changeColor(event) {
  event.target.style.color = 'green';
}

/*
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.