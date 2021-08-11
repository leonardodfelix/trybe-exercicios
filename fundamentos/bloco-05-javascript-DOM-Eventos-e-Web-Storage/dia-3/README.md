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
