# CSS Responsivo - Mobile First

## Conteúdos

### Mão na massa

Copie os códigos `HTML` e `CSS` abaixo, salve-os no mesmo diretório com os nomes `index.html` e `style.css` , respectivamente;
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
  <meta charset="UTF-8">
  <title>Media Queries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Raleway:wght@300;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1 id="mySpotrybefy">✨ Trybe Tricks ✨</h1>
      <p>Vamos fazer algumas divs desaparecerem hoje?</p>
    </header>
    <main>
      <section class="cards">
        <div class="card">
          <h3>Primeira div</h3>
          <p>E será a primeira participante de hoje!</p>
          <p>Essa div só poderá aparecer se nossa tela possuir <strong>largura mínima</strong> de 500px.</p>
        </div>
        <div class="card">
          <h3>Segunda div</h3>
          <p>Ué, mas ela deveria aparecer aqui?</p>
          <p>Pois é! Mas essa div deverá aparecer apenas se a largura <strong>estiver entre</strong> 600px e 1000px.</p>
        </div>
        <div class="card">
          <h3>Terceira div</h3>
          <p>Vamos para nosso Grand Finale!</p>
          <p>Para nosso grande truque, precisaremos que essa div <strong>não apareça</strong> entre 650px e 950px.</p>
        </div>
        <div class="dont-show">
          <p>Quem gostou, pediu bis!</p>
          <p>Sem alterar a classe '.trick', como fazer para o texto dela aparecer quando a tela estiver com menos de 500px de largura?</p>
        </div>
      </section>
    </main>    
    <footer>
      <p>Trybe Tricks, criando pessoas desenvolvedoras que fazem mágica com as mãos!</p>
    </footer>
    <p class="trick">Floreio! Como você conseguiu fazer aparecer mais essa caixa de texto?</p>
  </body>
</html>
```
```css
body {
  align-items: center;
  color: #525252;
  display: flex;
  flex-flow: column wrap;
  font-family: Raleway, sans-serif;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
}

h1 {
  font-family: Cinzel, serif;
  font-size: 48px;
}

h3 {
  font-size: 25px;
  margin: 0;
}

p {
  font-size: 18px;
  font-weight: 300;
}

p.trick {
  color: white;
  font-size: 14px;
}

p strong {
  font-weight: 700;
}

.card p:nth-last-child(1) {
  align-self: flex-end;
  font-size: 14px;
}

.cards {
  display: flex;
  flex-flow: row wrap;
}

.card {
  border-radius: 5px;
  color: white;
  display: none;
  flex-flow: row wrap;
  height: 200px;
  margin: 20px;
  padding: 20px;
  width: 200px;
}

.card:nth-of-type(1) {
  background-color: #0fa36b;
}

.card:nth-of-type(2) {
  background-color: #0255c2;
}

.card:nth-of-type(3) {
  background-color: #41197f;
}
```
Para os seguintes exercícios você não precisará alterar o arquivo HTML, apenas o CSS. 😉
1. A primeira div só poderá aparecer se nossa tela possuir **largura mínima de 500px** .
2. A segunda div só poderá aparecer apenas se a largura estiver **entre 600px e 1000px** .
3. A terceira div não deverá aparecer se nossa tela possuir **largura entre 650px e 950px** .
4. Sem alterar a classe **trick** , faça com que o texto dela apareça somente quando a tela estiver com **menos de 500px de largura** .

## Exercícios

### Parte I
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Media Query Exercise 1</title>
  <link rel="stylesheet" href="exercise1.css" />
</head>
  <body>
    <header>
      <h1>Media Query Demo</h1>
    </header>
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ipsum quae veritatis in nihil laudantium labore beatae nulla laborum rem. Error, molestiae eaque quod placeat at. Labore architecto minus accusantium.
      </p>
    </section>
    <main>
      <h2>Box Columns</h2>
      <figure>
        <img src="http://placekitten.com/452/450?image=12" alt="Placeholder kitteh">
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img src="http://placekitten.com/452/450?image=5" alt="Placeholder kitteh">
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img src="http://placekitten.com/452/450?image=1" alt="Placeholder kitteh">
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img src="http://placekitten.com/452/450?image=9" alt="Placeholder kitteh">
        <figcaption>Place Kittens are great</figcaption>
      </figure>
      <figure>
        <img src="http://placekitten.com/452/450?image=6" alt="Placeholder kitteh">
        <figcaption>Place Kittens are great</figcaption>
      </figure>
    </main>
  </body>
</html>
```
```css
body {

}
h1 {

}
h2 {

}

img {
    max-width: 100%;
}

figure {
    margin: 0;
}
```
**Realize as seguintes tarefas:**
1. Faça o tamanho da fonte ser maior;
2. Faça o tamanho da fonte dos elementos `h1` ser menor;
3. Aumente o espaçamento entre as figuras;
4. Adicione um pouco de margin na página.
5. Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px) . Esse será o primeiro breakpoint do layout . Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;
6. Crie uma media query no seu arquivo CSS , usando a dimensão em pixels que você guardou como o `min-width` do teste da media query . Dentro desse breakpoint , adicione os seguintes ajustes:
* Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito) ;
* Ajuste o tamanho da fonte;
* Ajuste as margens da página;
* Faça as imagens serem mostradas em duas colunas.
7. Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint .
8. Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px) , e realize os seguintes ajustes dentro do breakpoint :
* Altere a cor de fundo;
* Ajuste o tamanho da fonte;
* Ajuste as margens da página;
* Adicione a propriedade `max-width` à página, para garantir que a largura das linhas não fique muito grande.
