# Manipulando tabelas

<details>
<summary><strong>COMMANDS</strong></summary>

`INSERT`  
`UPDATE`  
`DELETE`  

</details>

1. Insira um novo funcionário na tabela `sakila.staff` .  
Para saber quais campos são obrigatórios, clique com o botão direito na tabela `sakila.staff` e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma *query* .

3. Selecione os cinco primeiros nomes e sobrenomes da tabela `sakila.customer` e cadastre essas pessoas como atores na tabela `sakila.actor` .

4. Cadastre três categorias de uma vez só na tabela `sakila.category` .

5. Cadastre uma nova loja na tabela `sakila.store` .

```sql
SELECT * FROM sakila.staff;

DESCRIBE sakila.staff;

INSERT IGNORE INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Leonardo', 'Felix', 5, 'leonardo.doria.felix1983@gmail.com', 2, true, 'leonardodfelix', 'asd123');
    
INSERT IGNORE INTO sakila.staff
(first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
('Adam', 'Felix', 5, 'adamsfelix@gmail.com', 2, false, 'adamserafim', 'dsa321'),
('Helena', 'Felix', 5, 'helena.serafim.felix@gmail.com', 2, false, 'helenasfelix', 'a1s2d3');

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5;

INSERT INTO sakila.category (name)
VALUES ('Terror'), ('Adventure'), ('Western');

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 1);
```

---

