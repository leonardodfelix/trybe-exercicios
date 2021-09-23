const { users, findUserById , getUserName} = require('./getUserName');

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

describe('Utilizando a sintaxe de Promise', () => {
  it('verifique o resultado da função getUserName para o caso em que o usuário é encontrado', () => (
    getUserName(1).then((result) => {
      expect(result).toBe('Mark');
    })
  ));
  it('teste para o caso em que o usuário não é encontrado', () => (
    getUserName(3).catch((error) => {
      expect(error.message).toMatch('User with 3 not found.');
    })
  ));
});