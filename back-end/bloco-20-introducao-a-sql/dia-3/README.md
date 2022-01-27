# Filtrando dados de forma específica

<details>
<summary><strong>COMMANDS</strong></summary>

`WHERE`  
`LIKE`  ( `_` to represent 1 char, `%` for multiple)  
`IN` `BETWEEN`  

</details>

---

```sql
/* OPERADORES
=   IGUAL
>   MAIOR QUE
<   MENOR QUE
>=  MAIOR QUE OU IGUAL
<=  MENOR QUE OU IGUAL
<>  DIFERENTE DE
AND OPERADOR LÓGICO E
OR  OPERADOR LÓGICO OU
NOT NEGAÇÃO
IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)

Obs.: 1 IS TRUE - 0 IS FALSE
*/
```

---

```sql
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo
```

---

## Content

**A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados sakila . Consulte-a ao fazer os desafios propostos.**  

**G** = permitido para todos  
**PG** = permitido para crianças menores de 13 anos  
**PG-13** = permitido para pessoas com mais de 13 anos  
**R** = permitido para pessoas com mais de 17 anos  
**NC-17** = permitido apenas para adultos  

Entre no banco de dados sakila e siga as instruções (e guarde as queries para conferir posteriormente):  

1. Precisamos identificar os dados do cliente com o e-mail `LEONARD.SCHOFIELD@sakilacustomer.org` . As informações podem ser encontradas na tabela `customer`  

2. Precisamos de um relatório dos nomes dos clientes, em `ordem alfabética` , que não estão mais ativos no nosso sistema e pertencem à loja com o **id = 2** , e não inclua o cliente `KENNETH` no resultado. As informações podem ser encontradas na tabela `customer`  

3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição ( replacement_cost ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em `ordem alfabética` pelo título. As informações podem ser encontradas na tabela `film`  

4. Quantos clientes estão `ativos` e na loja `1` ? As informações podem ser encontradas na tabela `customer`  

5. Mostre todos os detalhes dos clientes que `não` estão ativos na loja `1` . As informações podem ser encontradas na tabela `customer`

6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a `menor` taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em `ordem alfabética` pelo título. As informações podem ser encontradas na tabela `film`  

Você vai se deparar também com casos em que você só tem parte de uma informação, ou em que precisa criar queries mais dinâmicas. Para esses casos, temos o `LIKE` . Como assim? É o que veremos a seguir.

```sql
SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer
WHERE store_id = 2 
AND first_name <> 'KENNETH'
AND active IS FALSE
ORDER BY first_name;

SELECT 
title AS `título`,
description AS `descrição`,
release_year AS `ano de lançamento`,
replacement_cost AS `custo de substituição`
FROM sakila.film
WHERE rating <> 'NC-17' AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT COUNT(*) FROM sakila.customer WHERE active IS TRUE AND store_id = 1;

SELECT * FROM sakila.customer WHERE active IS NOT TRUE AND store_id = 1;

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
```

---

1. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.

2. Mostre todos os detalhes dos filmes cujas descrições finalizam com china .

3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord .

4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon .

5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary .

6. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito .

7. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.

```sql
SELECT * FROM sakila.film WHERE title LIKE '%ace%';

SELECT * FROM sakila.film WHERE description LIKE '%china';

SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * FROM sakila.film WHERE title LIKE '___gon%';

SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM sakila.film WHERE description LIKE '%sumo%' AND description LIKE '%monkey%';
```

---

1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: `hicks, crawford, henry, boyd, mason, morales e kennedy` , ordenados por nome em ordem alfabética.

2. Mostre o e-mail dos clientes com os `address_id 172, 173, 174, 175 e 176` , ordenados em ordem alfabética.

3. Descubra quantos pagamentos foram feitos entre `01/05/2005` e `01/08/2005` . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato `ano/mês/dia` , diferente do formato brasileiro, que é `dia/mês/ano` .

4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de `3 a 6` . Os resultados devem ser classificados em filmes com `maior duração` de empréstimo primeiro. Em caso de empate, ordene em `ordem alfabética` pelo título.

5. Monte um relatório que exiba o título e classificação dos `500` primeiros filmes direcionados para as classificações indicativas `G, PG e PG-13` . Os resultados devem estar `ordenados` por título.

```sql
SELECT * FROM sakila.customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT * FROM sakila.customer
WHERE address_id IN(172, 173, 174, 175, 176)
ORDER BY first_name;

SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM sakila.film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title LIMIT 500;
```

---

1. Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.

2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?

3. Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.

4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas .

```sql
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25'; # OR WHERE payment_date LIKE '2005-05-25%'

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT
	DATE(rental_date) AS `Data`,
    YEAR(rental_date) AS `Ano`,
    MONTH(rental_date) AS `Mês`,
    DAY(rental_date) AS `Dia`,
    HOUR(rental_date) AS `Hora`,
    MINUTE(rental_date) AS `Minuto`,
    SECOND(rental_date) AS `Segundo`
FROM sakila.rental
WHERE rental_id = 10330;

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-28 22:00:00' AND '2005-07-28 23:59:59';
```
