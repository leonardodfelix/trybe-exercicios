# JavaScript - Eventos

## Conteúdos

# Parte II

---
```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
  <meta charset="UTF-8">
  <title>addEventListener</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header> 
      <h1>Spotrybefy</h1>
    </header>
    <main>
      <h3 id="mySpotrybefy">Meu top 3 do Spotrybefy</h3>
      <ul class="container">
        <li class="tech" id="firstLi">Aqui está a primeira tecnologia que mais gostei.</li>
        <li id="secondLi">Aqui está a segunda tecnologia que mais gostei.</li>
        <li id="thirdLi">Aqui está a terceira tecnologia que mais gostei.</li>
      </ul>
      <input type="text" id="input" placeholder="Alterar a primeira tecnologia">      
    </main>
    <script src="main.js"></script>
  </body>
</html>
```
---
```
body {
  align-items: center;
  background-color: #333;
  color: white;
  display: flex;
  flex-flow: column wrap;
  font-family: Montserrat, sans-serif;
  height: 100vh;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100vw;
}

.container {
  display: flex;
  flex-flow: row wrap;
}

.container li {
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  height: 200px;
  justify-content: center;
  margin: 2px;
  padding: 15px;
  text-align: center;
  transition: all 0.25s ease;
  width: 200px;
}

h1 {
  font-size: 48px;
  color: #2fc18c;
}

.container li:nth-of-type(1) {
  background-color: #2fc18c;
  color: #333;
}

.container li:nth-of-type(2) {
  background-color: #006dfb;
}

.container li:nth-of-type(3) {
  background-color: #41197f;
}

input {
  border: 1px solid #333;
  margin: 10px 0;
  padding: 5px;
  text-align: center;
  width: 200px;
}

input:hover {
  border: 1px solid #2fc18c;
}

input:focus {
  border: 1px solid #006dfb;
  outline: 2px solid #006dfb;
}

.tech {
  transform: translateY(-20px);
}
```
---
```
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

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
```
---
## Exercícios
### Calendário Tryber

![calendario](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/javascript/dom-manipulation/gif/calendario-0a0d72ae91dc4119dd55d8cd379c9b29.gif)

```
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Calendar</title>
  </head>
  <body>
    <header class="month-container">
      <ul>
        <li id="month">Dezembro</li>
        <li id="year">2020</li>
      </ul>
    </header>
    <div class="week-days-container">
      <ul class="week-days">
      </ul>
    </div>
    <div class="days-container">
      <ul id="days">
      </ul>
    </div>
    <div class="buttons-container">
    </div>
    <section class="tasks-container">
      <div class="my-tasks">
        <h3>MINHAS TAREFAS</h3>
      </div>
      <div class="input-container">
        <h3>COMPROMISSOS</h3>
        <label for="task-input">Novo:</label>
        <input type="text"
          id="task-input"
          placeholder="Escreva seu compromisso"
        >
        <button id="btn-add">Adicionar</button>
      </div>
      <div class="task-list-container">
        <ul class="task-list">
        </ul>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>
```
---
```

* {
  margin: 0;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #eee;
}

button {
  margin: 20px;
}

#btn-add {
  margin: 0;
}

.buttons-container {
  background-color: #eee;
  display: inline-block;
  text-align: center;
  width: 100%;
}

#days {
  margin: 0;
}

#days li {
  color: #777;
  display: inline-block;
  font-size:20px;
  margin: 5px 0;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.input-container {
  width: 49%;
  height: 100px;
  display: inline-block;
}

input {
  margin-top: 8px;
}

label {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.month-container {
  background: green;
  padding: 40px 25px;
  text-align: center;
}

.month-container ul li {
  color:white;
  font-size: 20px;
  letter-spacing: 3px;
  list-style-type: none;
  text-transform: uppercase;
}

.my-tasks {
  clear: both;
  float: left;
  height: 100px;
  vertical-align: middle;
  width: 49%;
}

.my-tasks div {
  border: 1px solid black;
  border-radius: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  height: 35px;
  margin-left: 10px;
  vertical-align: middle;
  width: 35px;
}

.my-tasks div:hover {
  height: 45px;
  width: 45px;
}

.my-tasks span {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-bottom: 10px;
  vertical-align: middle;
}

.tasks-container {
  height: 130px;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.tasks-container h3 {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  text-decoration: underline;
  letter-spacing: 3px;
}

.task-list {
  margin-top: 20px;
}

.task-list-container {
  display: inline-block;
}

.task-list-container ul {
  list-style-type: none;
  padding: 0;
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.week-days-container {
  margin-left: 35px;
}

.week-days li {
  color: #666;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.week-days {
  font-size: 20px;
  margin: 0px;
  padding: 10px 0;
}
```
---
### Exercício 1:
O array `dezDaysList` contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag `<ul>` com ID `"days"` . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
* Os dias devem estar contidos em uma tag `<li>` , e todos devem ter a classe day . Ex: `<li class="day">3</li>`
* Os dias 24, 25 e 31 são feriados e, além da classe `day` , devem conter também a classe `holiday` . Ex: `<li class="day holiday">24</li>`
* Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe `day` e a classe `friday` . Ex: `<li class="day friday">4</li>`
```
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
```
### Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
* Adicione a este botão a ID `"btn-holiday"` .
* Adicione este botão como filho/filha da tag `<div>` com classe `"buttons-container"` .
### Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe `"holiday"` .
* É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
### Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
* Adicione a este botão o ID `"btn-friday"` .
* Adicione este botão como filho/filha da tag `<div>` com classe `"buttons-container"` .
### Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
* É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
### Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
* [Dica - Propriedade: event.target .](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
### Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag `<span>` contendo a tarefa.
* O elemento criado deverá ser adicionado como filho/filha da tag `<div>` que possui a classe `"my-tasks"` .
### Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag `<div>` com a classe `task` .
* O parâmetro cor deverá ser utilizado como cor de fundo da `<div>` criada.
* O elemento criado deverá ser adicionado como filho/filha da tag `<div>` que possui a classe `"my-tasks"` .
### Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag `<div>` referente a cor da sua tarefa, atribua a este elemento a classe `task selected` , ou seja, quando sua tarefa possuir a classe `task selected` , ela estará selecionada.
* Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente `task` , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
### Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
* Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial `rgb(119,119,119)` .
### Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
* Se nenhum caractere for inserido no campo `input` , a função deve retornar um `alert` com uma mensagem de erro ao clicar em "ADICIONAR".
* Ao pressionar a tecla "enter" o evento também deverá ser disparado.
* [Dica - Propriedade: keyCode](https://www.w3schools.com/JSREF/event_key_keycode.asp) .
