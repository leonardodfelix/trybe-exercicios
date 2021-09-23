const { getUserName } = require('./getUserName');

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users , para saber quais IDs existem.

// describe('Utilizando a sintaxe de Promise', () => {
//   it('verifique o resultado da função getUserName para o caso em que o usuário é encontrado', () => (
//     getUserName(1).then((result) => {
//       expect(result).toBe('Mark');
//     })
//   ));
//   it('teste para o caso em que o usuário não é encontrado', () => (
//     getUserName(3).catch((error) => {
//       expect(error.message).toMatch('User with 3 not found.');
//     })
//   ));
// });

describe('Utilizando a sintaxe de Promise', () => {
  it('verifique o resultado da função getUserName para o caso em que o usuário é encontrado', async () => {
    const result = await getUserName(2);
    expect(result).toBe('Paul');
  });
  it('teste para o caso em que o usuário não é encontrado', async () => {
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual(new Error('User with 3 not found.'));
    }
  });
});