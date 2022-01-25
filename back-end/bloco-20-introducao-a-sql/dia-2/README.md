# Encontrando dados em um banco de dados

<details>
<summary><strong>COMMANDS</strong></summary>

`SELECT`  
`AS`  
`CONCAT`  
`DISTINCT`  
`COUNT`  
`LIMIT`  
`OFFSET`  
`ORDER BY`

</details>

---

## Queries
* **DDL** : Data Definition Language:
  * `CREATE` : Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers
  * `ALTER` : Para alterar a estrutura de qualquer objeto
  * `DROP` : Permite deletar objetos
  * `TRUNCATE` : Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados
* **DML** : Data Manipulation Language:
  * `SELECT` : usado para buscar dados em um banco de dados
  * `INSERT` : insere dados em uma tabela
  * `UPDATE` : altera dados dentro de uma tabela
  * `DELETE` : exclui dados de uma tabela
* **DCL** : Data Control Language:
  * `GRANT` : concede acesso a um usuário
  * `REVOKE` : remove acessos concedidos através do comando GRANT
* **TCL** : Transactional Control Language:
  * `COMMIT` : muda suas alterações de temporárias para permanentes no seu banco de dados
  * `ROLLBACK` : desfaz todo o impacto realizado por um comando
  * `SAVEPOINT` : define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query
  * `TRANSACTION` : comandos que definem onde, como e em que escopo suas transações são executadas

---

## Content

```sql
SELECT 'Leonardo' AS Nome, 'D Felix' AS Sobrenome, 'Santos' AS 'Cidade de origem', 38 AS 'Idade';
SELECT 13 * 8; -- 104
SELECT now() AS 'Data Atual';
```

---

```sql
USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
DESCRIBE film;
SELECT
  title AS 'Título',
  description AS 'Descrição',
  release_year AS 'Ano de lançamento'
FROM film;
```

---

```sql
USE sakila;
DESCRIBE film;
SELECT CONCAT(title, ' - ',release_year) AS 'Lançamento do filme' FROM film;
SELECT CONCAT(title, ' - ',rating) AS 'Classificação' FROM film;
SELECT * FROM address LIMIT 10;
SELECT CONCAT(address, ', ', district) AS 'Endereço' FROM address;
```

---

```sql
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
    
USE Escola;
SELECT * FROM Alunos;
SELECT DISTINCT Nome, Idade FROM Alunos;
SELECT DISTINCT Nome FROM Alunos;
SELECT DISTINCT Idade FROM Alunos;
```

---

```sql
USE sakila;
DESCRIBE staff;
SELECT COUNT(password) FROM staff;
SELECT COUNT(staff_id) FROM staff;
SELECT COUNT(email) FROM staff;
```

---

```sql
SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental LIMIT 10;
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
```

---

```sql
SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;
```

---

```sql
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(DISTINCT title) FROM sakila.film;

DESCRIBE sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor; -- 121
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC;

SELECT * FROM sakila.language WHERE NOT name = 'English' LIMIT 5;

SELECT 
	title AS 'título',
    release_year AS 'ano de lançamento',
    length AS 'duração',
    rating AS 'classificação indicativa',
    replacement_cost AS 'custo de substituição'
FROM sakila.film 
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;
```
