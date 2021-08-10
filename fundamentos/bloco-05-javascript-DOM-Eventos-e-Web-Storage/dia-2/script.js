// 1ª Parte
// Ex1
const bodyTag = document.querySelector('body');
const h1Tag = document.createElement('h1');

h1Tag.innerHTML = 'Exercício 5.2 - JavaScript DOM'
bodyTag.appendChild(h1Tag);

// Ex2
const mainTag = document.createElement('main');

mainTag.className = 'main-content';
bodyTag.appendChild(mainTag);

// Ex3
const centerSection = document.createElement('section');
centerSection.className = 'center-content';

bodyTag.appendChild(centerSection);

// Ex4
let pTag = document.createElement('p');
centerSection.appendChild(pTag);

// Ex5
let leftSection = document.createElement('section');
leftSection.className = 'left-content';

mainTag.appendChild(leftSection);

// Ex6
let rightSection = document.createElement('section');
leftSection.className = 'right-content';

mainTag.appendChild(rightSection);

// Ex7
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';

leftSection.appendChild(image);

// Ex8
let ulTag = document.createElement('ul');
rightSection.appendChild(ulTag);

let numList = ['um','dois','três','quatro','cinco','seis','sete','oito','nove','dez'];

for (let elem of numList) {
  let liTag = document.createElement('li');
  liTag.innerText = elem;
  ulTag.appendChild(liTag);
}

// Ex9
function appendTag(tagName, father, howMany) {
  for (let index = 0; index < howMany; index += 1){
    let tag = document.createElement(tagName);
    father.appendChild(tag);
  }
}

appendTag('h3',mainTag,3);

// 2ª Parte
// Ex1
h1Tag.className = 'title';

// Ex2
let h3List = document.getElementsByTagName('h3');

for (let h3 of h3List) {
  h3.className = 'description';
}

// Ex3