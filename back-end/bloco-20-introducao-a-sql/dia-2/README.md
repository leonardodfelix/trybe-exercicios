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

---

# Exercise

**Exercício 1** : Faça as tarefas de 1 a 15.  
Para realizar os exercícios do 1 ao 15, restaure o banco de dados seguinte.  

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

---

1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
1. Escreva uma query para exibir três números em três colunas.
1. Escreva uma query para exibir a soma dos números 10 e 15.
1. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
1. Escreva uma query para exibir todas as informações de todos os cientistas.
1. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
1. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
1. Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
1. Escreva uma query que exiba a string "O projeto `Name` precisou de `Hours` horas para ser concluído." para cada projeto.
1. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
1. Escreva uma query para exibir o código de todos os projetos da tabela `AssignedTo` sem que haja repetições.
1. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
1. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
1. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
1. Escreva uma query que exiba a string "Existem `Number` cientistas na tabela Scientists.", em que `Number` se refira a quantidade de cientistas.

---

**Exercício 2** : Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

```sql
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);

INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

---

1. Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
1. Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
1. Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
1. Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
1. Escreva uma query para exibir por quantas empresas a peça 1 é provida.

---

**Exercício 7** : Usando `WHERE` , faça os exercícios [deste link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1) .  

**Exercício 8** : Aplicando Restrições, faça os exercícios [deste link](https://sqlbolt.com/lesson/select_queries_with_constraints) .  

**Exercícios 9** : Estude e faça os exercícios das páginas 1 a 3 [deste link](http://www.sqlcourse.com/intro.html) .  

**Exercício 10** : Exercícios de comparação de valores. Faça os exercícios [deste link](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial) .  
