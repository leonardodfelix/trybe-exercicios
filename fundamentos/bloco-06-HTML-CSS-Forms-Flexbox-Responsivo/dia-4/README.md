# CSS Flexbox - Parte 2

## Conteúdos

### Propriedade: align-self

Copie o código abaixo e no seu editor de código, teste as possibilidades para a propriedade `align-self` .

```
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ALIGN SELF</title>
    <style>
      .container {
        border: 1px solid black;
        display: flex;
        height: 300px;
        margin: auto;
        width: 500px;
      }

      .keep {
        align-self: center;
        background-color: #FAA488;
        display: flex;
        justify-content: center;
        width: 150px;
        list-style: none;
      }

      .change {
        /* Altere a propriedade align-self. */
        align-self: center;
        background-color: #FBD26A;
        display: flex;
        justify-content: center;
        width: 200px;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="keep">REFERÊNCIA</li>
      <li class="change">ELEMENTO TESTE</li>
      <li class="keep">REFERÊNCIA</li>
    </ul>
  </body>
</html>
```

### Propriedade: order

Copie o código abaixo e teste as possibilidades de ordenação.

```
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ORDER</title>
    <style>
      .container {
        border: 1px solid black;
        display: flex;
        height: 50px;
        margin: auto;
        width: 500px;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 125px;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade order. */
        order: 1;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade order. */
        order: 2;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade order. */
        order: 3;
        list-style: none;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade order. */
        order: 4;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```

### Propriedades: flex-grow, flex-shrink, flex-basis

1. Teste as possibilidades para a propriedade `flex-grow` .

```
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ORDER</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```

2. Teste as possibilidades para a propriedade `flex-shrink` .

```
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - SHRINK</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-basis: 500px;
        flex-grow: 0;
        flex-shrink: 1;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```

3. Teste as possibilidades para a propriedade `flex-basis` .

```
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - BASIS</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        /* Altere a propriedade flex-basis */
        flex-basis: 500px;
        flex-grow: 0;
        flex-shrink: 1;
      }

      .one {
        background-color: #FBD26A;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        list-style: none;
      }

      .four {
        background-color: #006472;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```
